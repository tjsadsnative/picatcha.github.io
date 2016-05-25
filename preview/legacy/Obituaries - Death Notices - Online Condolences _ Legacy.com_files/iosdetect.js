try {
    var isIOS = /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
    if (isIOS)
        document.documentElement.classList.add('ios');
} catch(e) { } 
