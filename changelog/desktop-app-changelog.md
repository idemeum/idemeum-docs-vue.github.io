<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Release versions</title>

    <link rel="stylesheet" href="https://asset.idemeum.com/assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

    <link rel="stylesheet" href="assets/css/styles.css">

</head>

<body>

    <header class="toolbar px-4">
        <img 
            src="https://asset.idemeum.com/assets/images/Logo.svg" 
            class="idemeum-logo" 
            alt="logo">
        <span class="idemeum-header">idemeum</span>
    </header>



    <div class="container-fluid row m-0 p-0">
    
        <nav 
            class="navigation-menu p-1">
            <ul>
                <li id="windows-list"
                    class='nav-sub-menu'>
                    <div    
                        data-id="Windows" 
                        class="nav-sub-menu-item d-flex justify-content-between align-items-center">
                        <div>
                            <img 
                                src="assets/img/windows-svgrepo-com.png" 
                                class="os-logo"
                                alt="windows logo">
                            <span class="ml-2">
                                Windows
                            </span>
                        </div>
                        <div>
                            <span class="material-icons">arrow_drop_down</span>
                        </div>
                    </div>
                </li>

                <li id="macos-list"
                    class='nav-sub-menu'>
                    <div 
                        data-id="macOS" 
                        class="nav-sub-menu-item d-flex justify-content-between align-items-center">
                        <div>
                            <img 
                                src="assets/img/apple-svgrepo-com.png" 
                                class="os-logo"
                                alt="macos logo">
                            <span class="ml-2">
                                macOS
                            </span>
                        </div>
                        <div>
                            <span class="material-icons">arrow_drop_down</span>
                        </div>
                    </div>
                </li>
            </ul>
        </nav>

        <div 
            id="versions-info">
        </div>

    </div>






    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="assets/js/main.js"></script>

</body>

</html>