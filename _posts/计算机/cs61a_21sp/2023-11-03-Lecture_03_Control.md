---
layout: post
title: 
author: LemonWhale
tags:
  - Python
  - cs61a
---
# Recap of Function Evaluation
closure 闭包
环境反映了变量的作用域
作用域：声明起作用的那部分文本
```Python
x = 1
y = 12
def g1(x):
	def g2(x):
		print(x)
	g2(x + 1)
g1(2)
```
![Environment](/attachment/cs61a_sp21/环境.png)

每调用一次函数会形成一个新的框架，新框架指向该函数的父框架
```Python
def id(x):
	return x
print(id(id)(id(3)))
```
结果会打印 3
运行过程：
*id(id)*(id(3)) --> id(*id(3)*) --> id(3)
```Python
def incr(n):
	def f(x):
		return n + x
	return f
g = incr(5)
print(g(6))
```
结果会打印 11 

# New Topic: Control
***left* and *right***
计算left的值，如果left是真值，right作为整个表达式的值；如果left是假值，返回left的值，left作为整个表达式的值。   
可以理解为：and是与运算，所有条件为真时才是真，所以一旦遇到假值就会返回。
***left* or *right***
计算left的值，如果left是假值，right作为整个表达式的值；如果left是真值，返回left的值，left作为整个表达式的值。   
可以理解为：or是或运算，有一个条件为真时就是真，所以一旦遇到真值就会返回。

***Python中的假值***：数字0、空字符串("")、False、None、空列表([])、空元组(())、空字典({})
 
```Python
def signum(x):
	if x > 0:
		return 1
	elif x == 0:
		return 0
	else:
		return -1
```
的写法等价于
```Python
def signum(x):
	return 1 if x > 0 else 0 if x == 0 else -1
```

identation 缩进    
不定数重复：观察条件无法知道会重复几次

# Lab02
*如何写一个doctest文件来检验square(2) == 4*
```Python
def square(x):
    """
    >>> square(2)
    4
    """
    return x * x

if __name__ == "__main__":
    import doctest
    doctest.testmod()

    square(2)

```
*查看一个错题的diagram*
`python3 ok -q sum_digits --trace`    

*traceback查看信息*
以如下代码为例：   
```Python
def greet(name):
    print('Hello, ' + name)

def main():
    greet('Alice')
    greet('Bob')
    greet(someone)

if __name__ == '__main__':
    main()
```
如果运行会得到：
```Python
Traceback (most recent call last):
  File "example.py", line 9, in <module>
    main()
  File "example.py", line 7, in main
    greet(someone)
  File "example.py", line 2, in greet
    print('Hello, ' + name)
NameError: name 'someone' is not defined
```
以上信息的含义为：
- `File "example.py", line 9, in <module>`：这是最外层的位置，它表示在`example.py`文件的第9行，也就是`main()`语句，执行了主程序。
- `File "example.py", line 7, in main`：这是第二层的位置，它表示在`example.py`文件的第7行，也就是`greet(someone)`语句，调用了`main`函数。
- `File "example.py", line 2, in greet`：这是最内层的位置，它表示在`example.py`文件的第2行，也就是`print('Hello, ' + name)`语句，调用了`greet`函数。