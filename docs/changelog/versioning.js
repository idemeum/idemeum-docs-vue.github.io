var $windowsNavElement = document.querySelector("#windows-list");
var $macNavElement = document.querySelector("#macos-list");
var $versionInfo = document.querySelector("#versions-info");
var $windowsLogoImg = document.querySelector("#windows-logo");
var $macLogoImg = document.querySelector("#macos-logo");

const OS = {
    WINDOWS: 'Windows',
    MAC: 'macOS',
    LINUX: 'Linux'
};
var desktopAppVersionDetails = [];

$windowsLogoImg.src = `https://asset.${ORIGIN}/assets/images/windows-svgrepo-com.png`
$macLogoImg.src = `https://asset.${ORIGIN}/assets/images/apple-svgrepo-com.png`



function fetchVersioning() {

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/vnd.dvmi.desktop.app.version.detail.list+json'
        }
    };

    return new Promise((resolve, reject) => {
        fetch(`https://dvmi.${ORIGIN}/api/system/info/destopappversion`, options)
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch(err => reject(err));
    });

}

function getNavigationItems(navElement, desktopLoginApps) {

    if (desktopLoginApps) {

        var osName = desktopLoginApps.osName;
        for (var version of desktopLoginApps.versions) {
            navElement.innerHTML += '<ul style="display:none">'
                + `<li  
                    class="nav-sub-menu-version" 
                    data-os="${osName}" 
                    data-version="${version.version}">
                    v${version.version}
                </li>`
                + '</ul>';
        }
    }

}


function getVersionNumberElement(versionNumber) {
    return '<div class="version-number mb-4">'
        + `<span>Desktop Client app v${versionNumber}</span>`
        + '</div>';
}

function getReleaseVersionChangeLog(changeLogs) {
    let _changeLogs = "";

    if (changeLogs?.length > 0) {

        _changeLogs = '<div class="tag-label my-2"> Change logs: '
            + '<ul class="pl-4 my-2">';

        for (var changeLog of changeLogs) {
            _changeLogs += `<li class="change-log p-1">${changeLog}</li>`;
        }

        _changeLogs += '</ul></div>';
    }
    return _changeLogs;
}

function getReleaseSupportedVersions(supportedOsVersions) {

    let htmlElement = '<div class="supported-os my-3">'
        + '<div class="tag-label">Supported OS Version: </div>'
        + `<div class="tag-value">${supportedOsVersions?.toString()}</div>`
        + '</div>';

    return supportedOsVersions ? htmlElement : '';
}

function getReleaseDate(releaseDate) {
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    let htmlElement = '<div class="my-3">'
        + '<div class="tag-label">Released: </div>'
        + `<div class="tag-value">${new Date(releaseDate).toLocaleString("en-US", options)}</div>`
        + '</div>';

    return releaseDate ? htmlElement : '';
}

function getDownloadLink(version, extension) {
    return '<div>'
        + `<a href="https://asset.${ORIGIN}/desktoplogin/Idemeum_Desktop_Client_v${version}.${extension}" class="d-flex align-items-center download-link">Download`
        + '<span class="material-icons md-18">download</span></a>'
        + '</div>';
}




function addVersionElements(parentElement, desktopLoginApp, osName) {

    let releaseVersionsHTML = "";
    let extension = osName === OS.WINDOWS ? 'exe' : osName === OS.MAC ? 'app' : 'zip'


    if (desktopLoginApp) {

        releaseVersionsHTML += '<div class="mt-3 px-4">'
            + getVersionNumberElement(desktopLoginApp?.version)
            + getReleaseVersionChangeLog(desktopLoginApp?.changeLogs)
            + getReleaseDate(desktopLoginApp?.releaseDate)
            + getReleaseSupportedVersions(desktopLoginApp?.supportedOsVersions)
            + getDownloadLink(desktopLoginApp?.version, extension)
            + '</div>';
    }

    document.title = `Desktop Client app v${desktopLoginApp?.version} | ${osName}`
    parentElement.innerHTML = releaseVersionsHTML + '</div></div>';

}

function bindListeners() {
    $('.nav-sub-menu ul').hide();

    // open version list dropdown
    $(".nav-sub-menu .nav-sub-menu-item")
        .click(function () {

            // open clicked dropdown
            $(this)
                .parent(".nav-sub-menu")
                .children("ul")
                .slideToggle("100");


            document.querySelectorAll(".nav-sub-menu-item").forEach(e => e.classList.remove('active'));
            document.querySelectorAll(".nav-sub-menu-version").forEach(e => e.classList.remove('active'));

            this.classList.add('active');
            this.children[1].children[0].textContent = (this.children[1].children[0].textContent == 'arrow_drop_down') ? 'arrow_drop_up' : 'arrow_drop_down';
        });

    // add listeners to nav items
    document
        .querySelectorAll('.nav-sub-menu-version')
        .forEach(element => {
            element.addEventListener('click', function () {

                var data = desktopAppVersionDetails
                    ?.find(x => x.osName == this.dataset.os)
                    ?.versions
                    ?.find(x => x.version == this.dataset.version);

                if (data) {
                    addVersionElements($versionInfo, data, this.dataset.os);
                }

                document.querySelectorAll(".nav-sub-menu-item").forEach(e => e.classList.remove('active'));
                document.querySelectorAll(".nav-sub-menu-version").forEach(e => e.classList.remove('active'));
                this.classList.add('active');
            });
        });

    $(".nav-sub-menu .nav-sub-menu-item")[0]?.click();
    $(".nav-sub-menu-version")[0]?.click();

}


function getInstallerVersioning() {

    fetchVersioning()
        .then(response => {

            desktopAppVersionDetails = response.desktopAppVersionDetails;

            getNavigationItems(
                $windowsNavElement,
                desktopAppVersionDetails.find(x => x.osName == OS.WINDOWS)
            );

            getNavigationItems(
                $macNavElement,
                desktopAppVersionDetails.find(x => x.osName == OS.MAC)
            );

            bindListeners();

        })
        .catch(err => {
            console.error(err);
        })

}

getInstallerVersioning();
