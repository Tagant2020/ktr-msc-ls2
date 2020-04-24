$(function(){ //doliprane,ixprim,ventoline,pivalone
		
		//***********************
			$('body').tagant_insert_page('accueil');
			$('body').tagant_submit_form('#form_connexion');
			$('body').tagant_submit_form('#form_inscription');
			$('body').tagant_submit_form('#form_ajoutcard');
		//***********************
	
		
		$('body').on('click','#ajoutcarte',function(e){
			e.preventDefault();
			var th = $(this);
			var val = th.val();
			$('body #formajoutcard').removeAttr('style'); 
			$('body #formajoutcard').modal('show'); 
		})
		
		$('body').on('click','.accueil',function(e){
			e.preventDefault();
			var th = $(this);
			var nom = th.attr('name');
			if(nom == 'connexion'){
				$('body #inscription').attr('style','display:none'); 
				$('body #connexion').removeAttr('style'); 
				$('body #connexion').modal('show'); 
			}else if(nom == 'inscription'){
				$('body #connexion').attr('style','display:none'); 
				$('body #inscription').removeAttr('style'); 
				$('body #inscription').modal('show');
				// $('body').tagant_insert_page('interface_users');
			}
		})
		$('body').on('click','#ajouteruser',function(e) { 
			e.preventDefault();
			if(localStorage.getItem('nom') != null){
				$('body #formajoutusers').removeAttr('style'); 
				$('body #formajoutusers').modal('show'); 
				$('body .ajoute').each(function(){
					var th = $(this);
					var nom = th.attr('name');
					
					if(nom != 'commentaire'){
						th.val(localStorage.getItem(nom));
					}else{
						th.text(localStorage.getItem(nom));
					}
				})
			}else{
				$('body #formajoutusers').removeAttr('style'); 
				$('body #formajoutusers').modal('show'); 
			}
			
		});
		
		$('body').on('click','.retourversaccueil',function(e) { 
			e.preventDefault();
			$('body').tagant_insert_page('accueil');
		});
		
		$('body').on('click','.affichermdp',function(e){
			e.preventDefault();
			var th = $(this);
			var parent = th.parent();
			if(parent.children('input.mdp').hasClass('invisibless')){
				var valeur = parent.children('input.mdp').val();
				parent.children('input.mdp').attr('type','text');
				parent.children('input.mdp').attr('value',valeur);
				parent.children('input.mdp').removeClass('invisibless');
				parent.children('input.mdp').addClass('visibless');
				th.children('span').removeClass('glyphicon-eye-close');
				th.children('span').addClass('glyphicon-eye-open');
			}else{
				parent.children('input.mdp').attr('type','password');
				parent.children('input.mdp').addClass('visibless');
				parent.children('input.mdp').addClass('invisibless');
				th.children('span').removeClass('glyphicon-eye-open');
				th.children('span').addClass('glyphicon-eye-close');
			}
			
		})
		
		$('body').on('change','select.sendto',function(e){ 
			e.preventDefault();
			var th = $(this);
			var id_card = th.attr('name');
			var nom_user = th.val();
			$.ajax({
				url:'controleur/sendto.php',
				pe:'post',
				dataType:'json',
				data:'id_card='+id_card+'&nom_user='+nom_user,
				success:function(data){
					alert('Donnée transmise');
				}
			})
		});
})
 