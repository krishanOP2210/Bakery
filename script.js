function orderNow(product){

const message =
encodeURIComponent(
`Hi Bakery! I want to order ${product}.`
);

window.open(
`https://wa.me/918769564375?text=${message}`,
'_blank'
);

}
