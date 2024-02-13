<?php
$secret_key = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa4";
$upload_dir = "upload/";
$domain_url = 'https://notfishvr.dev/';

function generateRandomString($length = 10)
{
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, strlen($characters) - 1)];
    }
    return $randomString;
}

function isValidFile($file)
{
    $allowed_extensions = array("png", "jpg", "jpeg", "gif");
    $file_extension = pathinfo($file, PATHINFO_EXTENSION);
    return in_array($file_extension, $allowed_extensions);
}

if (isset($_POST['secret'])) {
    if ($_POST['secret'] == $secret_key) {
        if (isset($_FILES["sharex"]) && $_FILES["sharex"]["error"] == UPLOAD_ERR_OK) {
            $original_filename = basename($_FILES["sharex"]["name"]);

            if (isValidFile($original_filename)) {
                $random_string = generateRandomString();
                $target_file = $upload_dir . $random_string . ".gif";
                move_uploaded_file($_FILES["sharex"]["tmp_name"], $target_file);

                list($width, $height) = getimagesize($target_file);

                $maxWidth = 500;
                $maxHeight = 500;

                $spoilerClass = '';
                if (isset($_GET['spoiler'])) {
                    $spoilerClass = 'spoiler';
                }
                $html_content = '
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <title>notfishvr.dev</title>
                    <meta charset="UTF-8">
                    <meta content="notfishvr.dev" property="og:title" />
                    <meta content="hosted on notfishvr.dev" property="og:description" />
                    <meta name="theme-color" content="#7289DA">
                    <meta name="twitter:card" content="summary_large_image">
                    <meta property="og:image" content="' . $domain_url . $target_file . '">
                
                    <style>
                        body {
                            background-color: #0f0f0f; 
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            height: 100vh;
                            margin: 0;
                            font-family:"Segoe UI", "Source Sans Pro", Calibri, Candara, Arial, sans-serif;
                        }
                        #container {
                            max-height: 80vh;
                            overflow: auto;
                        }
                        #text {
                            font-size: 18px; 
                            margin-top: 15px;
                            color: rgb(255, 255, 255);
                        }
                        #image-container {
                            position: fixed;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            padding: 31px; 
                            width: 35%; 
                            background-color: rgba(0, 0, 0, 0.1);
                            backdrop-filter: blur(15px);
                            border-radius: 10px;
                            color: rgba(255, 255, 255, 0.774);
                            text-align: center;
                        }
                        .spoiler img {
                            filter: blur(15px);
                        }
                        img {
                            max-width: 100%;
                            height: auto;
                            display: block;
                            margin: 0 auto;
                        }
                        #image-container p {
                            text-align: center;
                            margin-top: 10px;
                            color: #555;
                        }
                        #raw-btn {
                            display: block;
                            margin-top: 15px;
                            padding: 10px;
                            background-color: #7289DA;
                            color: #fff;
                            text-decoration: none;
                            border-radius: 5px;
                            cursor: pointer;
                        }
                    </style>
                    <script>
                        window.onload = function() {
                            var spoilerParam = new URLSearchParams(window.location.search).get("spoiler");
                            var imageContainer = document.getElementById("image-container");

                            if (spoilerParam !== null) {
                                imageContainer.classList.add("spoiler");
                            }

                            imageContainer.addEventListener("click", function() {
                                imageContainer.classList.toggle("spoiler");
                            });
                        }
                    </script>
                </head>
                <body>
                    <div id="container">
                        <div id="image-container" class="' . $spoilerClass . '">
                            <img src="' . $domain_url . $target_file . '" style="max-width: ' . $maxWidth . 'px; max-height: ' . $maxHeight . 'px;">
                            <div id="text"><p>hosted on notfishvr.dev</p></div>
                            <a id="raw-btn" href="' . $domain_url . $target_file . '" target="_blank" rel="noopener noreferrer">RAW</a>
                        </div>
                    </div>
                </body>
                </html>
                ';

                $html_filename = 'upload/' . $random_string . '.html';
                file_put_contents($html_filename, $html_content);

                echo $domain_url . 'upload/' . $random_string;

            } else {
                echo 'Invalid file format. Allowed formats: png, jpg, jpeg, gif';
            }
        } else {
            echo 'File upload failed - CHMOD/Folder doesn\'t exist?';
        }
    } else {
        echo 'Invalid Secret Key';
    }
} else {
    echo 'No post data received';
}
?>
