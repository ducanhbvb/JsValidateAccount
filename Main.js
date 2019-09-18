function checkAccount(account) {
    // regexp= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;;
    //let regexp = /^[_a-z0-9]{6,}$/;
    let regexp = /^[a-z0-9_](\w|\|_){5,32}$/;
    if (regexp.test(account)){
        alert('address valid account');

    }else {
        alert('address Invalid account');
    }
}