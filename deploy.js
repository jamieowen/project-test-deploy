var deploy = require('gh-pages');

deploy.publish( './deploy', { branch: 'deplpy' }, function(){
    console.log( 'deployed..' );
});
