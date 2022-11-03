<?php
    $conexion = mysqli_connect('localhost', 'root', 'password', 'sorteo_atlantida');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Atlantida FM | Participantes</title>
</head>
<body>
  <div class="navBar">
    <div class="home">
      <img class="imgHome" src="hogar.png" alt="home">
    </div>
  </div>
  <div class="main-Container">
    <div class="left-Container">
      <div class="winnersContainer">
        <div class="tittleWin">
          <img class="ImgWinn" src="trofeo.jpg" alt="">
          <div class="glass2">
            <div class="tittle5">
              <h1 class="HWinners">PREMIOS</h1>
              <div class="line4"></div>
            </div>
          <div class="winners">
            <ul class="listReward">
              <li class="Reward1">Automovil Audi</li>
              <li class="Reward2">Casa</li>
              <li class="Reward3">Viaje a Qatar</li>
              <li class="Reward4">Cena en el restaurante Gusteau's</li>
            </ul>
          </div>
        </div>
      </div>
        
    </div>

    <div class="textContainer">
        <div class="TittleSorteo">
          <h2>Sorteo ATLANTIDA</h2>
          <div class="lineSorteo"></div>
        </div>
        <div class="Text2Container">
          <p class="pSorteo">La idea de hacer un sorteo vino de los directivos del Instituto,
             para agregar más dinamismo y participación de los oyentes
              en los programas de radio. Es por esa decisión que se realizó
               una página para realizar Sorteos de ATLANTIDA FM por alumnos de 7mo año el 20/10/2022.</p>
        </div>
      </div>
    </div>
    <div class="right-Container">
      <button class="tuKola" onclick="charge()">Cargar</button>
      <h3>PARTICIPANTES</h3>
      <form action="optionForm">
        <select name="select" id="select">
          <option value="option" class="option1">10</option>
          <option value="option" class="option2">50</option>
          <option value="option" class="option3">100</option>
        </select>
      </form>
      <form action="" class="formParticipants" method="post">
        <div class="tableContainer">
          <table id="participanTable">
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>DNI</th>
            </tr>
            <tr>
                <td>Ayrton</td>
                <td>Miotti</td>
                <td>45093210</td>
            </tr>
            <tr>
                <td>Facundo</td>
                <td>Nieto</td>
                <td>355u93r64Y</td>
            </tr>
            <tr>
                <td>Ludmila</td>
                <td>Noriega</td>
                <td>12345678</td>
            </tr>
            <?php
                $sql = 'SELECT nombre, apellido, DNI FROM alumnos';
                $result = mysqli_query($conexion, $sql);

                while($mostrar = mysqli_fetch_array($result)){
                ?>
                <tr>
                    <td><?php echo $mostrar['nombre'] ?></td>
                    <td><?php echo $mostrar['apellido'] ?></td>
                    <td><?php echo $mostrar['DNI'] ?></td>
                </tr>         
            <?php    
            }
            ?>

            </table>
          </div>
          <div class="btnShowContainer">
            <input type="submit" class="btn-Show" value="COMENZAR">
          </div>
      </form>
    </div>
  </div>
    <script src="main.js"></script>
</body>
</html>