---
layout: post
title: Transform
tags: 
- Pytorch
- 深度学习
---

**导入和函数**

```python
# 作用：转化为TensorFlow数据类型
from torchvision import transform

tensor_test = transform.Totensor() # Totensor是一个类
img = tensor_test(img_input)
```

**Tensor数据类型**

包装了神经网络需要的参数 

**常见的Tensorforms类**

- image.open()打开的数据类型是PIL
- cv2.imread()打开的数据类型是numpy.ndarray
- Totensor()之后的数据类型是tensor

**\__call__**函数的使用

```python
class person:
	def __call__(self,name):
		print("__call__"+"Hello"+name)
	def hello(self,name):
		print("hello"+name)
		
person = person()
person("ZhangSan")
person.hello("ZhangSan")
```
可以看出__call__可以允许类直接使用参数进行函数的调用

Totensor和Normalize的使用

```python
# 转化为tensor格式
trans_tensor = transform.Totensor()
img_tensor = trans_tensor(img)

# Normalize 归一化 input[channel] = (input[channel] - mean[channel] / std[channel])
# 输入是tensor，均值和标准差，三通道输入三个值
trans_norm = transform.Normalize([0.5,0.5,0.5],[0.5,0.5,0.5])
img_norm = trans_norm(img_tensor)
```

Resize的使用

```python
#输入为PIL image，返回值也是PIL
trans_resize = transforms.Resize((512,512))
img_resize = trans_resize(img)
```

Compose的使用

```python
trans_compose = transforms.Compose([trans_resize,trans_totensor])
```
*Compose*中第一个参数的输出是第二个参数的输入，最后输出最后一个参数的输出。

*RandomCrop*随机裁剪，一个参数是正方形，也可以指定(h,w)


```ad-note
title: 注意

⚠️使用各个函数的时候一定要注意输入和输出。

⚠️多看官方文档。
```
