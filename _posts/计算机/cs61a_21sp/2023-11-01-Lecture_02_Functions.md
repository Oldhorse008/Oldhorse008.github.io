---
layout: post
title: 
author: LemonWhale
tags:
  - Python
  - cs61a
---
# side effects
side effects 副作用 可以理解为函数运行过程中产生的变化，并不会影响返回值：比如print函数
函数中调用函数时，会运行每一个调用的函数，被调函数将函数的返回值传入调用函数，并产生副作用
如 print(print("1"),print("2"))
执行过程中逐步求解，从外层到里层

substitution 替换
函数本身是一种赋值
替换的原则是替换那些自由出现的变量，即在表达式中没有被定义或者限制的变量，例如
```Python
def hmmmm(x):
	def f(x):
		return x
	return f

print(hmmmm(5)(6))
```
的输出是 6
# Environments

An environment is a mapping from names to values.
环境就一种名称和值上的映射关系。
