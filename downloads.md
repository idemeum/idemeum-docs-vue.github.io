# Downloads

[[toc]]

## Mobile application

Download mobile application by scanning the following QR-code.

![Download mobile](./images/download-mobile.png)

|     Mobile application       | Supported OS                       |
| :-----------------------     |:---------------------------------------|
| [idemeum for iOS](https://apps.apple.com/us/app/idemeum/id1552180449)              | iOS 14 and above                       |
| [idemeum for Android](https://play.google.com/store/apps/details?id=com.idemeum.dvmi)          | Android 9 and above                    |

## Browser extension

|     Extension       | Supported browser                       |
| :-----------------------     |:---------------------------------------|
| [idemeum for Safari](https://apps.apple.com/us/app/idemeum-for-safari/id1594576207?mt=12)     | Apple Safari       |
| [idemeum for Chrome](https://chrome.google.com/webstore/detail/idemeum-for-chrome/pafnbapgmlfnlohampbpnfhijnhfbnab)     | Google Chrome       |
| [idemeum for Chrome](https://chrome.google.com/webstore/detail/idemeum-for-chrome/pafnbapgmlfnlohampbpnfhijnhfbnab)     | Microsoft Edge         |

## Desktop client

Check our [detailed guides](https://integrations.idemeum.com/tag/desktop-mfa/) to download and set up latest desktop client.

|     Desktop MFA client       | Supported OS                       |
| :-----------------------     |:---------------------------------------|
| idemeum for Windows | Windows 10 and 11 |

## Remote access agent

You can install idemeum agent for Linux with a [simple bash script](https://docs.idemeum.com/remote-access/install-agent.html). We will autodetect Linux OS and install required package. We support most Linux distributions, including Ubuntu, Debian, CentOS and more.

|     Remote access agent     | Supported CPU architecture              |
| :----------------------     |:-------------------------------|
| Linux agent    | Linux / 64 bit (amd)           |

## Authentication proxy

You can download authentication proxy from idemeum admin portal. Navigate to `Applications` -> `Authentication proxy`. Then once you access a proxy configuration, you can navigate to `Installer` tab and download executable. 




<script>

var $windowsNavElement = document.querySelector("#windows-list");
var $macNavElement = document.querySelector("#macos-list");
var $versionInfo = document.querySelector("#versions-info");

const OS = {
    WINDOWS: 'Windows',
    MAC: 'macOS',
    LINUX: 'Linux'
};


var desktopLoginAppVersionChangeLogDetails = [];

function fetchVersioning() {

    const options = {
        method: 'GET',
        mode: `cors`,
        headers: {
            'accept': 'application/json'
        }
    };

    return new Promise((resolve, reject) => {
        // fetch('data.json', options)
        fetch('https://dvmi.idemeumlab.com/api/system/info/desktopappchangelog', options)
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
        + '<div class="tag-value">${osName} (${supportedOsVersions?.toString()})</div>'
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
        + '<div class="tag-value">${new Date(releaseDate).toLocaleString("en-US", options)}</div>'
        + '</div>';

    return releaseDate ? htmlElement : '';
}

function getDownloadLink(link) {
    return '<div class="d-flex align-items-center download-link">'
        + '<a href="${link}">Download</a>'
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



</script>