<script src="cookies.js"></script>
<script src="form.js"></script>
<?php

echo  'send.php';

var_dump($_POST);


//echo htmlspecialchars($_COOKIE["answers"]);

$dados = htmlspecialchars($_COOKIE["answers"]);

$dados_explode = explode(',',$_COOKIE["answers"]);

//var_dump(explode(',',$_COOKIE["answers"])); die;



$funil = [

'home'=> 'residencia',
'business'=> 'Negócio',
'flat'=> 'Apartamento',
'chalet'=> 'chalé',
'primary'=>'Habitual',
'second-home'=> 'Segunda residência',
'insideUrban'=> 'Dentro do núcleo urbano',
'outsideUrban'=> 'Fora do núcleo urbano',
'streetLevel'=> 'À direita na via pública',
'noGuardedUrbanization'=> 'Atrás do jardim da frente',
'guardedUrbanization'=> 'Não vigiada',
'garden'=> 'Jardim ou terreno',
'balconyOrTerrace'=> 'Varanda ou terraço',
'no-access'=> 'Não possui',
'yes-grid'=> 'Sim',
'no-grid'=> 'Não',
'always'=> 'Sempre há alguém',
'less2hours'=> 'Menos de 2 horas por dia',
'2_4hours'=> 'Entre 2 e 5 horas',
'more4hours'=> 'Mais de 5 horas',
'yes-robbed'=> 'Sim',
'no-robbed'=> 'Não',
'shopRestaurant'=> 'Comércio de rua',
'warehouse'=> 'Empresa em um centro comercial',
'office'=> 'Fábrica em polígono industrial',
'others'=> 'Escritório em um edifício empresarial',
'onlyMe'=> '1 funcionário',
'2_4employees'=> 'De 2 a 5 funcionários',
'more4employees'=> 'Mais de 5 funcionários',
'mornings'=> 'Somente pela manhã',
'afternoons'=> 'Somente à tarde',
'morningsAfternoons'=> 'Manhã e tarde',
'nights'=> 'Noturno',
'24hours'=> '24 horas',
'hightValue'=> 'Grande valor',
'mediumValue'=>'Médio valor',
'lowValue'=> 'Baixo valor'

];

foreach ($dados_explode  as $key => $value) {
 echo  $funil[$value] . '<br>';
}

