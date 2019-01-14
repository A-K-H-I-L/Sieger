//get data from firestore in my google account

let products = [];

function renderProduct(doc,product_list){
	let li    = document.createElement('li');
	let name  = document.createElement('span');
	let count = document.createElement('span');
	let img   = document.createElement('img');

	li.setAttribute('doc_id', doc.id);
	name.textContent  = doc.data().Name;
	count.textContent = "; Count: "+doc.data().Count;
	img.src = doc.data().src;


	li.appendChild(name);
	li.appendChild(count);
	li.appendChild(img);

	product_list.appendChild(li);

}

db.collection('products').get().then((snapshot)=>{
	let product_list = document.querySelector('#product_list');
	snapshot.docs.forEach(doc=>{
		//console.log(doc.data());
		//products.append(doc.data());
		renderProduct(doc,product_list);
	});
});
