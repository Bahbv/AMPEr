# <img src="https://raw.githubusercontent.com/Bahbv/AMPEr/master/src/AMPEr/svg/roze-koek.svg" width="30" height="30"> AMPEr
AMPEr is a vanilla js cookiebanner compliant with the EU GDPR.  
(A)nalytic (M)arketing (P)ersonalization (E)ssential rozekoek.

A roze koek ("pink cake") is a typical Dutch pastry. It consists of a small flat cake with a layer of pink fondant icing. 

# Usage
### Modifying source
I've used NPM and gulp while making this  
Too make some changes you can clone the repo do a `npm install` and `gulp` to build the project and serve it with browsersync  

### Adding to site
Put the dist/AMPEr folder somewhere on your webhost or CDN.  
Add AMPEr.js and AMPEr.css to your page like this  
```html
<link rel="stylesheet" href="./dist/AMPEr/css/AMPEr.css">
<script src="./dist/AMPEr/js/AMPEr.js"></script>
```
Initialize amper with the following script
```js
AMPEr.init({
  // Options here ..
});
```


