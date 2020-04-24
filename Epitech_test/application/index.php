<!DOCTYPE html>
	<html>
		<head>
			<meta charset="utf-8">
			<link rel="stylesheet" href="bootstrap/css/bootstrap.css">
			<link rel="stylesheet" type="text/css" href="bootstrap/css/style.css">
			<title>Application test Mac2</title>
		</head>
		<body>
			<div class="container"></div>
			
			<div class="modal" id="connexion" style='display:none'> 
					<div class="modal-dialog modal-sm">   
						<div class="modal-content">     
							<div class="modal-header">       
								<button type="button" class="close btn btn-danger" data-dismiss="modal" id='retireformdemandeuser'>x</button>
								<h4 class="modal-title"><center>Connexion</center></h4>  
							</div>     
							<div class="modal-body">  
								 <div class="panel panel-primary">
									<div class="panel-heading">
										<h4><center></center></h4>
									</div>
									<div class="panel-body">
										<form action ="" method="post" data-url="controleur/connection.php" id="form_connexion">
											<span id='messageconnection' style='color:red'></span>
											<div class="form-group">
												<label for="name">Name:</label>
												<input type="text" class="form-control" required id="name"  name="name" placeholder="entrer votre Login">
											</div>
											<div class="form-group">
												<label for='mdp'>Mot de passe:</label>
												<div class="input-group"> 
													<input type="password" class="form-control invisibless mdp" required name="mdp"> 
													<span class="input-group-addon affichermdp" style='cursor:pointer'><span class='glyphicon glyphicon-eye-close'></span></span> 
												</div>
											</div>
											<button class="btn btn-success" type="submit"><span class="glyphicon glyphicon-ok-sign"></span> Entrer</button>
										</form>
								</div>
							</div> 
						</div> 
					</div>
				</div>
			</div>
			
			<div class="modal" id="inscription" style='display:none'> 
					<div class="modal-dialog modal-sm">   
						<div class="modal-content">     
							<div class="modal-header">       
								<button type="button" class="close btn btn-danger" data-dismiss="modal" id='retireformdemandeuser'>x</button>
								<h4 class="modal-title"><center>Inscription</center></h4>  
							</div>     
							<div class="modal-body">  
								 <div class="panel panel-primary">
									<div class="panel-heading">
										<h4><center></center></h4>
									</div>
									<div class="panel-body">
										<form action ="" method="post" data-url="controleur/inscription.php" id="form_inscription">
											<span id='messageinscription' style='color:red'></span>
											<div class="form-group">
												<label for="name">Name:</label>
												<input type="text" class="form-control" required id="nameinscription"  name="name" placeholder="entrer votre Login">
											</div>
											<div class="form-group">
												<label for='mdp'>Mot de passe:</label>
												<div class="input-group"> 
													<input type="password" class="form-control invisibless mdp" required name="mdp"> 
													<span class="input-group-addon affichermdp" style='cursor:pointer'><span class='glyphicon glyphicon-eye-close'></span></span> 
												</div>
											</div>
											<button class="btn btn-success" type="submit"><span class="glyphicon glyphicon-ok-sign"></span> Entrer</button>
										</form>
								</div>
							</div> 
						</div> 
					</div>
				</div>
			</div>
			
			<div class="modal fade" id="formajoutcard" style='display:none'> 
					<div class="modal-dialog modal-md">   
						<div class="modal-content">     
							<div class="modal-header">       
								<button type="button" class="close btn btn-danger" id='retireformentreprise' data-dismiss="modal">x</button>
								<h4 class="modal-title nbreentrepriseajouter" ><center>Carte(s) ajouté(s) </center></h4>     
							</div>     
							<div class="modal-body">  
								 <div class="panel panel-primary">
									<div class="panel-heading nbreformrestant">
										
									</div>
									<div class="panel-body">
										<form action ="" method="post" data-url="controleur/ajoutcard.php" id="form_ajoutcard">
											<div class="form-group" id='divpageentreprise'>
													<div class="form-group">
														<label>Name:</label>
														<input type="text" class="form-control"  name="name" required> 
													</div>
													<div class="form-group">
														<label>Email:</label>
														<input type="email" class="form-control"  name="email" required> 
													</div>
													<div class="form-group">
														<label>Tel:</label>
														<input type="number" class="form-control"  name="tel" required> 
													</div>
													<div class="form-group">
														<label>Company:</label>
														<input type="text" class="form-control ajoute"  name="company"  required> 
													</div>
												<button class="btn btn-success" type="submit"><span class="glyphicon glyphicon-ok-sign"></span>   Ajouter</button>
												<input type="reset" class='resetformentreprise' style='display:none'>
											</div>
										</form>
								</div>
							</div> 
						</div> 
					</div>
				</div>
			</div>
			
			<script src="js/jquery.js"></script>
			<script src="bootstrap/js/bootstrap.js"></script>
			<script src="js/tagant_plugin_manager.js"></script>
			<script src="js/index.js"></script>
		</body>
	</html>
