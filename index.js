var fs = require('fs');

var dir = __dirname+"/files/";

var lerArquivos = function(file){
	fs.readFile(file, "utf-8", function(err, data){
		if (err) throw err;
		console.log('Lendo arquivo %s', file);
		console.log('>>> '+data+'\n');
	})
}

var lerDiretorio = function(dir){
	console.log('Lendo diretorio %s \n', dir);
	fs.readdir(dir, function(err, result){
		for(f in result){
			file = dir+result[f];
			lerArquivos(file);			
		}
	});
}

var main = function(){
	lerDiretorio(dir);
}

main();