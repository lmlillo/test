             var userJSON= '{"name":"Sophie", "age": 22,"photoURL":"http://images.freeimages.com/images/premium/small-comps/1465/14657807-beautiful-woman-long-hair.jpg", "place":"New York", "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."}';
             var user= JSON.parse(userJSON);
             
             $('h4.addProfile').append(user.name);
             $('.addProfile img.img-fluid').attr('src', user.photoURL);
             $('.addProfile .card-body h4.card-title').append(user.name+", "+user.age);
             $('.addProfile p.place').append(user.place);
             $('.addProfile p.description').append(user.description);

             
             $(document).ready(function(){
                $('.btn-secondary').click(function(){
                    if ($(this).hasClass('buttonColor')) {
                        $('body').removeClass('bodyColor');
                        $('.btn-secondary').removeClass('buttonColor');
                    }else{
                        $('body').addClass('bodyColor');
                        $('.btn-secondary').addClass('buttonColor');

                    }
                
                });
            });
