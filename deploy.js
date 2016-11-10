var deploy = require('gh-pages');

deploy.publish( './deploy', { branch: 'deploy' }, function(){
    console.log( 'deployed..' );
});
