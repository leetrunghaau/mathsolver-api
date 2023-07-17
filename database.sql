create table mathsolver.address
(
    district   varchar(50) null,
    commune    varchar(50) null,
    phone      varchar(12) null,
    province   varchar(50) null,
    status     varchar(10) null,
    detail     varchar(50) null,
    address_id varchar(20) not null
        primary key
);

create table mathsolver.blog_categories
(
    blog_category_id varchar(20) not null
        primary key,
    name             varchar(50) null,
    parent           varchar(20) null
);

create table mathsolver.brand
(
    brand_id   varchar(20) not null
        primary key,
    name       text        null,
    blog_link  text        null,
    created_at datetime    null
);

create table mathsolver.categories
(
    name        text        null,
    parent      varchar(20) null,
    enable      tinyint(1)  null,
    image       text        null,
    created_at  datetime    null,
    modified_at datetime    null,
    category_id varchar(20) not null
        primary key
);

create table mathsolver.discount
(
    discount_id varchar(20) not null
        primary key,
    create_at   datetime    null,
    modified_at datetime    null,
    enable_at   datetime    null,
    disable_at  datetime    null,
    type        varchar(10) null comment 'of percent or value',
    value       double      null,
    quantity    int         null,
    code        varchar(20) null
);

create table mathsolver.distributor
(
    distributor_id varchar(50) not null
        primary key,
    name           varchar(50) null,
    address        text        null,
    phone          varchar(12) null
);

create table mathsolver.product
(
    product_id   varchar(20) not null
        primary key,
    name         text        null,
    cartegory_id varchar(20) null,
    quantity     int         null,
    brand_id     varchar(20) null,
    information  text        null comment 'option for product card',
    price        double      null,
    created_at   datetime    null,
    modified_at  datetime    null,
    constraint product_brand_null_fk
        foreign key (brand_id) references mathsolver.brand (brand_id),
    constraint product_categories_null_fk
        foreign key (cartegory_id) references mathsolver.categories (category_id)
);

create table mathsolver.product_detail
(
    product_detail_id varchar(20) not null
        primary key,
    specifications    text        null comment 'json format',
    product_id        varchar(20) null,
    descriptiton      text        null comment 'option field',
    content           text        null comment 'html text',
    location          text        null,
    constraint product_blog_product_null_fk
        foreign key (product_id) references mathsolver.product (product_id)
);

create table mathsolver.product_image
(
    product_image_id int         not null
        primary key,
    product_id       varchar(20) null,
    name             text        null,
    main             tinyint(1)  null,
    image            text        null,
    constraint product_image_product_null_fk
        foreign key (product_id) references mathsolver.product (product_id)
);

create table mathsolver.user
(
    user_id    varchar(20) not null
        primary key,
    address_id varchar(20) null,
    first_name varchar(20) null,
    last_name  varchar(20) null,
    email      varchar(50) null,
    birth_date date        null,
    gender     varchar(7)  null,
    created_at datetime    null,
    constraint user_address_null_fk
        foreign key (address_id) references mathsolver.address (address_id)
);

create table mathsolver.account
(
    account_id  varchar(20) not null
        primary key,
    user_id     varchar(20) null,
    password    text        null,
    role        varchar(11) null,
    modified_at datetime    null,
    constraint account_user_null_fk
        foreign key (user_id) references mathsolver.user (user_id)
);

create table mathsolver.blog
(
    blog_id          varchar(20) not null
        primary key,
    blog_category_id varchar(20) null,
    user_id          varchar(20) null,
    title            text        null,
    thumbnail        text        null,
    introduction     text        null,
    content          text        null,
    create_at        datetime    null,
    modified         datetime    null,
    views            int         null,
    constraint blog_blog_categories_null_fk
        foreign key (blog_category_id) references mathsolver.blog_categories (blog_category_id),
    constraint blog_user_null_fk
        foreign key (user_id) references mathsolver.user (user_id)
);

create table mathsolver.cart
(
    cart_id    varchar(20) not null
        primary key,
    user_id    varchar(20) null,
    created_at datetime    null,
    constraint cart_user_null_fk
        foreign key (user_id) references mathsolver.user (user_id)
);

create table mathsolver.cart_item
(
    cart_item_id int         not null
        primary key,
    cart_id      varchar(20) null,
    product_id   varchar(20) null,
    quantity     int         null,
    constraint cart_item_cart_null_fk
        foreign key (cart_id) references mathsolver.cart (cart_id),
    constraint cart_item_product_null_fk
        foreign key (product_id) references mathsolver.product (product_id)
);

create table mathsolver.import_product
(
    import_product_id varchar(20) not null
        primary key,
    product_id        varchar(20) null,
    distributor_id    varchar(20) null,
    user_id           varchar(20) null,
    quantity          int         null,
    constraint import_product_distributor_null_fk
        foreign key (distributor_id) references mathsolver.distributor (distributor_id),
    constraint import_product_product_null_fk
        foreign key (product_id) references mathsolver.product (product_id),
    constraint import_product_user_null_fk
        foreign key (user_id) references mathsolver.user (user_id)
);

create table mathsolver.notification
(
    notification_id varchar(20) not null
        primary key,
    name            text        null,
    enable_at       datetime    null,
    disable_at      datetime    null,
    user_id         varchar(20) null,
    content         text        null comment 'html text',
    constraint notification_user_null_null_fk
        foreign key (user_id) references mathsolver.user (user_id)
            on update cascade on delete cascade
);

create table mathsolver.`order`
(
    order_id    varchar(20) not null
        primary key,
    user_id     varchar(20) null,
    create_at   datetime    null,
    progress    varchar(20) null,
    discount_id varchar(20) null,
    constraint order_discount_null_fk
        foreign key (discount_id) references mathsolver.discount (discount_id),
    constraint order_user_null_fk
        foreign key (user_id) references mathsolver.user (user_id)
);

create table mathsolver.bill
(
    bill_id        varchar(20) not null
        primary key,
    order_id       varchar(20) null,
    price          double      null,
    total          double      null,
    discount_value int         null,
    created_at     datetime    null,
    discount_code  varchar(20) null,
    constraint bill_order_null_fk
        foreign key (order_id) references mathsolver.`order` (order_id)
);

create table mathsolver.order_item
(
    order_item_id varchar(20) not null
        primary key,
    product_id    varchar(20) null,
    order_id      varchar(20) null,
    price         double      null comment 'fix in order create',
    quantity      int         null,
    constraint order_item_order_null_fk
        foreign key (order_id) references mathsolver.`order` (order_id),
    constraint order_item_product_null_fk
        foreign key (product_id) references mathsolver.product (product_id)
);

