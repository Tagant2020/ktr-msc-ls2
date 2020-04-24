 $(function(){
	//**********code servant a stopper,avancer,faire reculer un caroussel
	jQuery.fn.tagant_recup = function(){
		var liste ='';
		var numero_users ='';
							$.ajax({
								url:'controleur/recupcard.php',
								type:'post',
								dataType:'json',
								data:'id='+sessionStorage.getItem('num_user'),
								success:function(data){
								var company = '';
										var email = '';
										var name = '';
										var tel = '';
										var numero_card = '';
										for(var i in data){
											liste += '<tr>';
											for(var j in data[i]){
												if(j == 'company'){
													liste += '<td>'+data[i][j]+'</td>';
												}else if(j == 'email'){
													liste += '<td>'+data[i][j]+'</td>';
												}if(j == 'name'){
													liste += '<td>'+data[i][j]+'</td>';
												}if(j == 'tel'){
													liste += '<td>'+data[i][j]+'</td>';
												}
												if(j == 'num_card'){
													numero_card = data[i][j];
												}
											}
											liste += '<td><select  name='+numero_card+' class="form_control sendto btn btn-info"><option>Borel</option></select></td>';
											liste += '</tr>';
										}
										liste += '<tr>';
										$('body #corpsCompte').append(liste);
										$('body').tagant_recup_nomusers();
								}
							})
					}
					
	jQuery.fn.tagant_recup_nomusers = function(){
		var liste ='<option>Names</option>';
		var numero_users ='';
							$.ajax({
								url:'controleur/recup_users.php',
								type:'post',
								dataType:'json',
								data:'',
								success:function(data){
								var company = '';
										for(var i in data){
											for(var j in data[i]){
													liste += '<option>'+data[i][j]+'</option>';
											}
										}
										$('body select.sendto').html(liste);
								}
							})
					}
					
	jQuery.fn.tagant_insert_page = function(url){
							$.ajax({
								url:'vue/'+url+'.html',
								type:'post',
								data:'',
								success:function(data){
									if(url == 'accueil'){
										$('body .container').html(data);
										$('body .container').attr('style','position:relative;top:12em');
									}else if(url == 'compte'){
										$('body .container').html(data);
										$('body .container').attr('style','position:relative;top:12em');
									}else if(url == 'interface_users'){
										$('body .container').html(data);
										$('body .container').attr('style','position:relative;top:12em');
									}
									
								}
							})
					}
					jQuery.fn.tagant_submit_form = function(form_soumis){
						this.on('submit',form_soumis,function(e){
							e.preventDefault();
							var th= $(this);
							var url = th.data('url');
							var liste = '';
							var datas = '';
							if(form_soumis == '#form_ajoutcard'){
								 datas = th.serialize()+'&user_num='+sessionStorage.getItem('num_user');
							}else{
								 datas = th.serialize();
							}
							$.ajax({
								url:url,
								type:'post',
								dataType:'json',
								data:datas,
								success:function(data){
									if(form_soumis == '#form_inscription'){
										for(var x in data){
											for(var j in data[x]){
												sessionStorage.setItem(j,data[x][j]);
											}
										}
										$('body #retireformdemandeuser').trigger('click');
										$('body').tagant_insert_page('compte');
										$('body').tagant_recup();
										$('body').tagant_recup_nomusers();
									}else if(form_soumis == '#form_connexion'){
										$('body #retireformdemandeuser').trigger('click');
										if(data == 'exist'){
											$('body').tagant_insert_page('compte');
											$('body').tagant_recup();
										}else if(data == 'no_exist'){
											alert('Données erronées veuillez réessayer ');
										}
										$('body').tagant_recup_nomusers();
									}
									else if(form_soumis == '#form_ajoutcard'){
										var company = '';
										var email = '';
										var name = '';
										var tel = '';
										var numero_card = '';
										for(var i in data){
											liste += '<tr>';
											for(var j in data[i]){
												if(j == 'company'){
													liste += '<td>'+data[i][j]+'</td>';
												}else if(j == 'email'){
													liste += '<td>'+data[i][j]+'</td>';
												}if(j == 'name'){
													liste += '<td>'+data[i][j]+'</td>';
												}if(j == 'tel'){
													liste += '<td>'+data[i][j]+'</td>';
												}
												if(j == 'num_card'){
													numero_card = data[i][j];
												}
											}
											liste += '<td><select  name='+numero_card+' class="form_control sendto btn btn-info"><option>Borel</option></select></td>';
											liste += '</tr>';
										}
										liste += '<tr>';
										$('body #retireformentreprise').trigger('click');
										$('body #corpsCompte').prepend(liste);
										$('body').tagant_recup_nomusers();
									}
									
								}
							})
						})
					}
					
	
 })
	
	