export class Produit {
    categId: string;
    id?: string;
nom?: string;
image?: string;
prix?: string;
description?: string;
constructor(args: Produit) {
this.categId = args.categId;
this.id = args.id;
this.nom = args.nom;
this.image = args.image;
this.prix = args.prix;
this.description = args.description;
}


}

