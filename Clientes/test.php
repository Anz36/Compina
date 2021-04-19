<?php 
session_start();
include_once ("../Login/login.php");
echo $_SESSION['usuario'];
 ?>