<!DOCTYPE HTML>
<html>
<head>
    <title> Регистрация </title>
</head>
<body>
<style>
        body {
            font-family: serif, sans-serif;
            background-color: lightgreen;
        }
    </style>
    <h1>Регистрация </h1>
    <form method="post" action="<?php echo $_server['PHP_SELF']; ?>">
        <label for="fullname">ФИО:</label>
        <input type="text" name="fullname" id="fullname" required><br><br>
        <label for="dr">Дата рождения:</label>
        <input type="date" name="dr" id="dr" required><br><br>
        <label for="username">Логин:</label>
        <input type="text" name="username" id="username" required><br><br>
        <label for="password">Пароль:</label>
        <input type="password" name="password" id="password" required><br><br>
        <input type="submit" value="Зарегистрироваться">
    </form>
    <?php
   
    if ($_server["request_method"] == "pt") {
     
        $fullname = $_pt['fullname'];
        $username = $_pt['username'];
        $password = $_pt['password'];
        $dr = $_pt['dr'];
       
        echo "<h2>Регистрация успешна!</h2>";
        echo "<p>ФИО: " . $fullname . "</p>";
        echo "<p>Дата рождения: " . $dr . "</p>";
        echo "<p>Логин: " . $username . "</p>";
        echo "<p>Пароль: " . $password . "</p>";
       
    }
    ?>
</body>
</html>