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
var desktopLoginAppVersionChangeLogDetails = [];

$windowsLogoImg.src = `https://docs.${ORIGIN}/changelog/assets/images/windows-svgrepo-com.png`
$macLogoImg.src = `https://docs.${ORIGIN}/changelog/assets/images/apple-svgrepo-com.png`



function fetchVersioning() {

    const options = {
        method: 'GET',
    };

    return new Promise((resolve, reject) => {
        fetch(`https://dvmi.${ORIGIN}/api/system/info/desktopappchangelog`, options)
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch(err => reject(err));
    });

}

function getNavigationItems(navElement, desktopLoginApps) {

    var osName = desktopLoginApps.osName
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



function getOSNameElement(osName) {
    if (osName == OS.MAC) {
        return `<div class="os-name-header p-2 pt-3">macOS</div>`;
    }
    else if (osName == OS.WINDOWS) {
        return `<div class="os-name-header p-2 pt-3">Windows</div>`;
    }
}

function getVersionNumberElement(versionNumber) {
    return '<div class="version-number mb-4">'
        + `<span>v${versionNumber}</span>`
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

function getReleaseSupportedVersions(supportedOsVersions, osName) {

    let htmlElement = '<div class="supported-os my-3">'
        + '<div class="tag-label">Supported: </div>'
        + `<div class="tag-value">${osName} (${supportedOsVersions?.toString()})</div>`
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

function getDownloadLink(link) {
    return '<div class="d-flex align-items-center download-link">'
        + `<a href="${link}">Download</a>`
        + '<span class="material-icons md-18">download</span>'
        + '</div>';
}




function addVersionElements(parentElement, desktopLoginApp, osName) {

    var releaseVersionsHTML = "";

    if (desktopLoginApp) {

        // getOSNameElement(desktopLoginApp.osName)
        releaseVersionsHTML += '<div class="mt-3 px-4">'
            + getVersionNumberElement(desktopLoginApp?.version)
            + getReleaseVersionChangeLog(desktopLoginApp?.changeLogs)
            + getReleaseDate(desktopLoginApp?.releaseDate)
            + getReleaseSupportedVersions(desktopLoginApp?.supportedOsVersions, osName)
            + getDownloadLink("#")
            + '</div>';
    }

    parentElement.innerHTML = releaseVersionsHTML + '</div></div>';

}

function bindListeners() {
    // open version list dropdown
    $(".nav-sub-menu .nav-sub-menu-item")
        .click(function () {

            //  close all opened nav dropdown
            $('.nav-sub-menu ul').hide();
            $('.nav-sub-menu div .material-icons').html('arrow_drop_down');

            // open clicked dropdown
            $(this)
                .parent(".nav-sub-menu")
                .children("ul")
                .slideToggle("100");


            document.querySelectorAll(".nav-sub-menu-item").forEach(e => e.classList.remove('active'));
            document.querySelectorAll(".nav-sub-menu-version").forEach(e => e.classList.remove('active'));

            this.classList.add('active');
            this.children[1].children[0].textContent = 'arrow_drop_up';
        });

    // add listeners to nav items
    document
        .querySelectorAll('.nav-sub-menu-version')
        .forEach(element => {
            element.addEventListener('click', function () {

                var data = desktopLoginAppVersionChangeLogDetails
                    ?.find(x => x.osName == this.dataset.os)
                    ?.versions
                    ?.find(x => x.version == this.dataset.version);
                debugger
                if (data) {
                    addVersionElements($versionInfo, data, this.dataset.os);
                }

                document.querySelectorAll(".nav-sub-menu-item").forEach(e => e.classList.remove('active'));
                document.querySelectorAll(".nav-sub-menu-version").forEach(e => e.classList.remove('active'));
                this.classList.add('active');
            })
        })
}


function getInstallerVersioning() {

    fetchVersioning()
        .then(response => {

            desktopLoginAppVersionChangeLogDetails = response.desktopLoginAppVersionChangeLogDetails;

            getNavigationItems(
                $windowsNavElement,
                desktopLoginAppVersionChangeLogDetails.find(x => x.osName == OS.WINDOWS)
            );

            getNavigationItems(
                $macNavElement,
                desktopLoginAppVersionChangeLogDetails.find(x => x.osName == OS.MAC)
            );

            bindListeners();

        })
        .catch(err => {
            console.error(err);
        })

}

getInstallerVersioning();
