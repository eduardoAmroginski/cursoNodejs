create schema portal_noticias;
use portal_noticias;

create table noticias(
	id_noticia int not null primary key auto_increment,
    titulo varchar(100),
    noticia text,
    data_criacao timestamp default current_timestamp
	);
    
insert into noticias(titulo, noticia)values('TESTE NOTICIA 1', 'conteudo da noticia');

insert into noticias(titulo, noticia)values('TESTE NOTICIA 2', 'conteudo da noticia 2');

select *from noticias;


alter table noticias CHANGE data_noticia dataNoticia text

alter table noticias add column resumo varchar(100);
alter table noticias add column autor varchar(30);
alter table noticias add column data_noticia date;