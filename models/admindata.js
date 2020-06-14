const cardscollect = {
    Books: [
                {title: "Desert Solitaire",price: 1000,desc: "Desert Solitaire beautifully and brashly captures the essence of the American outdoors, replete with disdain for those who'd seek to spoil its natural wonder"},
                {title: "Disgrace",price: 2000,desc: "One afternoon while talking with a friend about books, I wondered how to best describe my experience of reading Disgrace"},
                {title: "Giovanni's Room",price: 3000,desc: "It would be difficult to talk about James Baldwin's Giovanni's Room and not touch on the simple fact that this slim novel, published in 1956"}
            ],
    Watch: [
                {title: "Patek Philippe",price: 20000,desc: "Patek Philippe is one of the 3 Holy Trinity Watch Brands"},
                {title: "Audemars Piguet",price: 30000,desc: "This is an iconic watch collection that was a major game-changer for Audemars Piguet who was the first to use a non-precious metal, stainless steel in the latest sports watch design and charge luxury prices"},
                {title: "Vacheron Constantin",price: 40000,desc: "The oldest continuously operating watchmaker in the world is a brand that brings hundreds of years of watchmaking history with it."}
            ]
};

module.exports = class CardsCollection{

    constructor(c,n,b){

        this.cat = c;
        if( b == false )
            cardscollect[this.cat+""].push(n);
        else{

            cardscollect[this.cat+""] = [];
            cardscollect[this.cat+""].push(n);
        }
    }

    static fetchAll(){

        return cardscollect;
    }
}