create table blog_categories
(
    blog_category_id varchar(20) not null
        primary key,
    name             varchar(50) null,
    parent           varchar(20) null,
    constraint blog_categories_blog_categories_blog_category_id_fk
        foreign key (parent) references blog_categories (blog_category_id)
);

create table brand
(
    brand_id    varchar(20) not null
        primary key,
    name        text        null,
    blog_link   text        null,
    description text        null
);

create table categories
(
    name        text        null,
    parent      varchar(20) null,
    image       text        null,
    category_id varchar(20) not null
        primary key,
    constraint categories_categories_category_id_fk
        foreign key (parent) references categories (category_id)
);

create table discount
(
    discount_id varchar(20) not null
        primary key,
    created_at  datetime    null,
    modified_at datetime    null,
    enable_at   datetime    null,
    apply_for   double      null,
    disable_at  datetime    null,
    type        varchar(10) null comment 'of percent or value',
    value       double      null,
    quantity    int         null,
    code        varchar(20) null
);

create table distributor
(
    distributor_id varchar(50) not null
        primary key,
    name           varchar(50) null,
    address        text        null,
    phone          varchar(12) null
);

create table product
(
    product_id  varchar(20) not null
        primary key,
    name        text        null,
    category_id varchar(20) null,
    quantity    int         null,
    brand_id    varchar(20) null,
    status      varchar(20) null,
    information text        null comment 'option for product card',
    price       double      null,
    created_at  datetime    null,
    modified_at datetime    null,
    constraint product_brand_null_fk
        foreign key (brand_id) references brand (brand_id),
    constraint product_categories_null_fk
        foreign key (category_id) references categories (category_id)
);

create table product_detail
(
    product_detail_id varchar(20) not null
        primary key,
    specifications    text        null comment 'json format',
    product_id        varchar(20) null,
    description       text        null comment 'option field',
    content           text        null comment 'html text',
    location          text        null,
    constraint product_blog_product_null_fk
        foreign key (product_id) references product (product_id)
);

create table product_image
(
    product_image_id varchar(20) not null
        primary key,
    product_id       varchar(20) null,
    name             text        null,
    main             tinyint(1)  null,
    image            text        null,
    constraint product_image_product_null_fk
        foreign key (product_id) references product (product_id)
);

create table user
(
    user_id     varchar(20) not null
        primary key,
    first_name  varchar(20) null,
    last_name   varchar(20) null,
    email       varchar(50) null,
    birth_date  date        null,
    gender      varchar(7)  null,
    created_at  datetime    null,
    verified    datetime    null,
    modified_at datetime    null,
    role        varchar(11) null
);

create table account
(
    account_id  varchar(20) not null
        primary key,
    user_id     varchar(20) null,
    password    text        null,
    modified_at datetime    null,
    constraint account_user_null_fk
        foreign key (user_id) references user (user_id)
);

create table address
(
    district   varchar(50) null,
    commune    varchar(50) null,
    phone      varchar(12) null,
    user_id    varchar(20) null,
    province   varchar(50) null,
    status     varchar(10) null,
    detail     varchar(50) null,
    address_id varchar(20) not null
        primary key,
    constraint address_user_null_fk
        foreign key (user_id) references user (user_id)
);

create table blog
(
    blog_id          varchar(20) not null
        primary key,
    blog_category_id varchar(20) null,
    user_id          varchar(20) null,
    title            text        null,
    thumbnail        text        null,
    introduction     text        null,
    content          text        null,
    created_at       datetime    null,
    modified_at      datetime    null,
    views            int         null,
    constraint blog_blog_categories_null_fk
        foreign key (blog_category_id) references blog_categories (blog_category_id),
    constraint blog_user_null_fk
        foreign key (user_id) references user (user_id)
);

create table cart
(
    cart_id    varchar(20) not null
        primary key,
    user_id    varchar(20) null,
    product_id varchar(20) null,
    quantity   int         null,
    constraint cart_user_null_fk
        foreign key (user_id) references user (user_id)
);

create table import_product
(
    import_product_id varchar(20) not null
        primary key,
    description       text        null,
    created_at        datetime    null,
    modified_at       datetime    null,
    product_id        varchar(20) null,
    distributor_id    varchar(20) null,
    user_id           varchar(20) null,
    quantity          int         null,
    constraint import_product_distributor_null_fk
        foreign key (distributor_id) references distributor (distributor_id),
    constraint import_product_product_null_fk
        foreign key (product_id) references product (product_id),
    constraint import_product_user_null_fk
        foreign key (user_id) references user (user_id)
);

create table notification
(
    notification_id varchar(20) not null
        primary key,
    name            text        null,
    enable_at       datetime    null,
    disable_at      datetime    null,
    user_id         varchar(20) null,
    content         text        null comment 'html text',
    constraint notification_user_null_null_fk
        foreign key (user_id) references user (user_id)
            on update cascade on delete cascade
);

create table `order`
(
    order_id    varchar(20) not null
        primary key,
    user_id     varchar(20) null,
    created_at  datetime    null,
    modified_at datetime    null,
    address_id  varchar(20) null,
    status      varchar(20) null,
    discount_id varchar(20) null,
    constraint order_address_address_id_fk
        foreign key (address_id) references address (address_id)
            on update cascade on delete cascade,
    constraint order_discount_null_fk
        foreign key (discount_id) references discount (discount_id),
    constraint order_user_null_fk
        foreign key (user_id) references user (user_id)
);

create table bill
(
    bill_id        varchar(20) not null
        primary key,
    order_id       varchar(20) null,
    price          double      null,
    total          double      null,
    discount_type  varchar(10) null,
    discount_value double      null,
    district       varchar(50) null,
    commune        varchar(50) null,
    phone          varchar(12) null,
    province       varchar(50) null,
    detail         varchar(50) null,
    created_at     datetime    null,
    discount_code  varchar(20) null,
    constraint bill_order_null_fk
        foreign key (order_id) references `order` (order_id)
);

create table order_item
(
    order_item_id varchar(20) not null
        primary key,
    product_id    varchar(20) null,
    order_id      varchar(20) null,
    price         double      null comment 'fix in order create',
    quantity      int         null,
    constraint order_item_order_null_fk
        foreign key (order_id) references `order` (order_id),
    constraint order_item_product_null_fk
        foreign key (product_id) references product (product_id)
);

