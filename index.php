<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="../favicon.png" type="image/x-icon">
    <link rel="stylesheet" href="../style.css">
    <title>CODE | Index</title>
</head>
<body>
    <header>
        <img src="logo_laragon.png" alt="">
        <h1>Seja bem vindo ao <strong>CODE Index</strong></h1>
    </header>
    <main>
        <nav>
            <a href="../">Voltar</a>
        <?php
            // Read directory, spit out links
            if ($handle = opendir('.')) {
                while (false !== ($entry = readdir($handle))) {
                    if ($entry != "." && $entry != "..") {
                        echo '<a href="'.$entry.'">Link to file '.$entry.'</a>';
                    }
                }
                closedir($handle);
            }
            ?>
        </nav>
        <aside id="espaco"></aside>

    </main>
    <footer>
Criado por Filipe Gabriel com a plataforma Laragon
    </footer>
</body>
</html>