---
title: "【Laravel】モデルメソッドによるパスワードのハッシュ化"
date: "2021-11-17"
category: "パーツ"
tags: ["Laravel"]
author: "林 裕大"
---

こっちのがスマート  

```php:title=User.php
<?php
class User extends Authenticatable {
    public function setPasswordAttribute( $attr ) {
        $this->attributes[ 'password' ] = \Illuminate\Support\Facades\Hash::make( $attr );
    }
}
```
