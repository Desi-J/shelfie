drop table products if exists;

create table produts (
product_id serial primary key,
name varchar(40) not null,
price integer not null,
image_Url text
);

insert into products(name,price,image_Url) 
values('book', 5, 'https://www.goodfreephotos.com/cache/vector-images/red-book-icon-vector-clipart.png');

insert into products(name,price,image_Url)
values('candy', 20, 'https://www.publicdomainpictures.net/pictures/220000/velka/candy-for-sale-1493992287Faj.jpg');

insert into products(name,price,image_Url)
values('duck', 11, NULL);