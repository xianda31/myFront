export class ArticleOption {
    name !: string;
    price !: number;
}
export class Article {
    genericName!:string;
    options!: ArticleOption[];
}

export class Order {
    payeeName !: string;
    article!: ArticleOption[];
}
