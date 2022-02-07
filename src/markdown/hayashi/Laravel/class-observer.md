---
title: "【Laravel】モデルオブザーバ"
date: "2021-11-30"
category: "パーツ"
tags: ["Laravel"]
author: "林 裕大"
---

モデルのCRUDを監視して、
クエリビルダによる捜査が行われた時に発火する

```php:title=UserObserver.php
<?php
class UserObserver {
    public function created( User $user ) {
        $user->notify( new \App\Notifications\UserHasBeenRegisterd );
    }
}
```

その他のオブザーバのメソッド

```php:title=ModelObserver
class ModelObserver {
    public function retrieved( $model ) {}
    public function creating( $model ) {}
    public function created( $model ) {}
    public function saving( $model ) {}
    public function saved( $model ) {}
    public function updating( $model ) {}
    public function updated( $model ) {}
    public function deleting( $model ) {}
    public function deleted( $model ) {}
    public function restoring( $model ) {}
    public function restored( $model ) {}
    public function forceDeleted( $model ) {}
}
```
