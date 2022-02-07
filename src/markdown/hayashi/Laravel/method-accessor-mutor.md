---
title: "【Laravel】アクセサとミュータ"
date: "2021-12-07"
category: "パーツ"
tags: ["Laravel"]
author: "林 裕大"
---

Eloquent属性値を取得/格納する時に任意の形に変えることができる  
メソッド名は、  
set<属性名>Attribute  
get<属性名>Attribute  
の形になる  

```php:title=User.php
<?php
class User extends Authenticatable {
    protected $fillable = [
        'name',
    ];
    protected $visible = [
        'name',
    ];
    public function setNameAttribute( $name ) {
        return openssl_encrypt( $name, 'AES-128-CBC', 'username' );
    }
    public function getNameAttribute( $name ) {
        return openssl_decrypt( $name, 'AES-128-CBC', 'username' );
    }
}
```
