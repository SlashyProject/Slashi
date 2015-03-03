/**
 * UserController
 *
<<<<<<< HEAD
 * @description :: Server-side logic for managing Users
=======
 * @description :: Server-side logic for managing users
>>>>>>> origin/master
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
<<<<<<< HEAD

	 findByPseudo: function (req, res) 
	 {     
	 	sails.log.debug("*******************findByPseudo");    
	 	User.findOneByPseudo(req.body.pseudo), function (err, user) 
	 		{       
	 			if (err) res.json({ error: 'oups error' }, 500);       
	 			if (user) { res.json(user) } 
	 				else { res.json({ message: 'User not found' });       
	 		}     
	 	};   
	 },

	  findAdult: function (req, res) 
	  {     
	  	sails.log.debug("*******************finAdult");     
	  	User.find({ age: { '>=': 18 } 	}, function (err, users) 
	  		{       
	  			if (err) res.json({ error: 'oups error' }, 500);       
	  			if (users) { res.json(users) } 
	  				else { res.json({ message: 'User not found' }); 
	  		}     
	  	});   
	  }


=======
	
>>>>>>> origin/master
};

