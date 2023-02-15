function solve(httpObj){
    
    validateMetod(httpObj);
    validateUri(httpObj);
    validVersion(httpObj);
    validMessage(httpObj);

    return httpObj;

    function validateMetod(httpObj){
        let validMethod = ['GET','POST','DELETE','CONNECT'];
        let propName= 'method';
        if(httpObj[propName]=== undefined || !validMethod.includes(httpObj[propName])){
            throw new Error('Invalid request header: Invalid Method');
        }
    }
    function validateUri(httpObj){
        let validUri = /^\*$|^[a-zA-Z0-9.]+$/
        let propName = 'uri';
        if(httpObj[propName]===undefined||!validUri.test(httpObj[propName])){
            throw new Error('Invalid request header: Invalid URI');
        }   
    }
    function validVersion(httpObj){
        let validVersion = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'] ;
        let rpopName = 'version';
        if(httpObj[rpopName]===undefined||!validVersion.includes(httpObj[rpopName])){
            throw new Error ('Invalid request header: Invalid Version');
        }
    }
    function validMessage(httpObj){
        let propName= 'message';
        let messageRegex = /^[^<>\\&'"]*$/;
        if(httpObj[propName]===undefined||!messageRegex.test(httpObj[propName])){
            throw new Error('Invalid request header: Invalid Message');
        }
    }
}
requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
  }
  )
