---
title: "JavaScript Syntax"
date: "2021-10-24"
category: "リファレンス"
tags: ["PHP","Laravel"]
author: "べ"
---

# Use validation rule "unique" in resource controllers

I learned this from 中日書房 case.

## Background
The project use resource route.  
There a role named salesman. When creating or editing a salesman, system will validate its email.  
Creating page and editing page use same blade file.  
And we want to use a request file to store rules so we need to divide the request we received is a creating or a editing.  

## Detail
Since we use resource controller, we can distinguish the request by its method: <font color=red>POST</font> and <font color=red>PUT</font>.  

| Verb | URI | ACTION | Route Name |
| :----| :-- | :----- | :--------- |
| <font color=red>POST</font> | /photos | store | photos.store |
| <font color=red>PUT/PATCH</font> | /photos/{photo} | update | photos.update |

So the if文 in Request file is:

```PHP
public function rules(Request $request) {
    if($request->method() === "PUT") {
        // 営業編集
        return [];
    } else {
        // 営業登録
        return [];
    }
}
```

When validating creating request data, we hope check the uniqueness of email address from data table "salesmen".  
When validating editing request data, we hope check the uniqueness of email address <font color=red>execpt itself</font>.  
So we use "unique". Its defination is:

```PHP
unique:table,column,except,idColumn
```

1. First parameter is <b>table</b> name in database.  
2. Second parameter is column name in <b>table</b>.  
3. Third parameter is id value that you want to execpt (AKA the current salesman id).  
4. Fourth parameter is id column name in <b>table</b>.  

For example, this is the struture of "salesmen" <b>table</b>:  

| id | name | email | password |
| ---- | ---- | ---- | ---- |
| bigint(20) | varchar(255) | varchar(255) | varchar(60) |  

And the code will be:

```PHP
public function rules(Request $request) {
    if($request->method() === "PUT") {
        // 営業編集
        return [
            'email' => 'unique:salesmen,email,' .$this->route('salesman'). ',id'
        ];
    } else {
        // 営業登録
        return [
            'email' => 'unique:salesmen,email'
        ];
    }
}
```

Please notice this:  
&nbsp;&nbsp;&nbsp;&nbsp;<b>$this->route('salesman')</b>  
When I was working on 中日書房 case, the "id" value was not included in $request.  
So I didn't know how to get it in an easy way. My colleague taught my this. It really is an artisan method.

## reference:  
https://laravel.com/docs/8.x/validation#rule-unique  
https://laravel.com/docs/8.x/controllers#resource-controllers
