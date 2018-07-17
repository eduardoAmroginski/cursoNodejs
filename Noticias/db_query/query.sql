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