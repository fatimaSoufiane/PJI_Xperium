/**
 * Converter
 */
var filepath = 'data-xperium';

var fs = require('fs');
/*var http = require('http');

var form = new FormData();

http.request('http://nodejs.org/images/logo.png', function(response) {
  form.append('my_field', 'my value');
  form.append('my_buffer', new Buffer(10));
  form.append('my_logo', response);
});
*/
//fs.readdir(filepath, function(err, files) {
	
	/* var users = {};
	files.forEach(function(filename) {
		if (filename.split('.').pop() != 'json') {
			return;
		}
		
		var content = fs.readFileSync(filepath + '/' + filename, {encoding: 'utf-8'});
		JSON.parse(content).forEach(function(value) {
			var userId = value['header']['userId'];
		//	if(!(userId in users)) {
		//		users[userId] = [];
			}
      //http://localhost:9000/api/21535abd4dd310ed7d330dcd741fa2f0/2013-12-28/2016-08-12
			users[userId].push({
				header: {
						scriptVersion: value['header']['scriptVersion'],
						date: filename.substring(0, 10)
				}, 
				data: value['data']
			});
		});
	});
	
	// Write user files
	fs.mkdir(filepath + '/convert/', function(err) {
		if(err) {
			// directory already exists
		}
		
		for(user in users) {
			var data = JSON.stringify(users[user], null, 2);
			fs.writeFile(filepath + '/convert/' + user + '.json', data, function(err) {
				if(err) {
					console.log('error writing');
				}
			});
		}
	});
	
	
	console.log('All data are loaded!');
});
*/
fs.readdir(filepath, function(err, files) {
var dates = {};
files.forEach(function(filename) {
		if (filename.split('.').pop() != 'json') {
			return;
		}
		
		var content = fs.readFileSync(filepath + '/' + filename, {encoding: 'utf-8'});
		JSON.parse(content).forEach(function(value) {
			var oneDate = value['metadata']['timestamp'];
	
      //http://localhost:9000/api/21535abd4dd310ed7d330dcd741fa2f0/2013-12-28/2016-08-12
			dates[oneDate].push({
				header: {
						scriptVersion: value['header']['scriptVersion'],
						date: filename.substring(0, 10)
				}, 
				data: value['data']
			});
		});
	});
	
	// Write date files
	fs.mkdir(filepath + '/convert/', function(err) {
		if(err) {
			// directory already exists
		}
		
		for(dt in dates) {
			var data = JSON.stringify(dates[dt], null, 2);
			fs.writeFile(filepath + '/convert/' + dt + '.json', data, function(err) {
				if(err) {
					console.log('error writing');
				}
			});
		}
	});
	
	
	console.log('All data are loaded!');
});