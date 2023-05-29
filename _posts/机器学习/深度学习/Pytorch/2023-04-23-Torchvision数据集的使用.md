---
layout: post
title: Torchvision数据集的使用
tags: 
- Pytorch
- 深度学习
---

地址：`PyTorch.org` -> `Docs` -> `torchvision` -> `Package Reference`

`CIFAR10` 图片分类的数据集:32×32

```Python
import torchvision
```

![CIFAR10](/attachment/深度学习/CIFAR10网络.png)

```Python
import torch
import torch.nn as nn


class module(nn.Module):

    def __init__(self):
        super(module, self).__init__()

    def forward(self, input):
        output = input
        return output


model = module()
input = torch.ones((64, 3, 32, 32))
output = model(input)
print(output.shape)

# 第一个卷积层
conv1 = nn.Conv2d(3, 32, 5, padding=2)
output1 = conv1(input)
print(output1.shape)

# 第一个池化层
max1 = nn.MaxPool2d(2, stride=2)
output2 = max1(output1)
print(output2.shape)

# 第二个卷积层
conv2 = nn.Conv2d(32, 32, 5, padding=2)
output3 = conv2(output2)
print(output3.shape)

#第二个池化层
max2 = nn.MaxPool2d(2, stride=2)
output4 = max2(output3)
print(output4.shape)

#第三个卷积层
conv3 = nn.Conv2d(32, 64, 5, padding=2)
output5 = conv3(output4)
print(output5.shape)

# 第三个池化层
max3 = nn.MaxPool2d(2, stride=2)
output6 = max3(output5)
print(output6.shape)

# 展平层
flat = nn.Flatten()
output7 = flat(output6)
print(output7.shape)

# 第一个全连接层
linear1 = nn.Linear(1024, 64)
output8 = linear1(output7)
print(output8.shape)

# 第二个全连接层
linear2 = nn.Linear(64, 10)
output9 = linear2(output8)
print(output9.shape)
```
输出结果为：
```Python
torch.Size([64, 3, 32, 32])
torch.Size([64, 32, 32, 32])
torch.Size([64, 32, 16, 16])
torch.Size([64, 32, 16, 16])
torch.Size([64, 32, 8, 8])
torch.Size([64, 64, 8, 8])
torch.Size([64, 64, 4, 4])
torch.Size([64, 1024])
torch.Size([64, 64])
torch.Size([64, 10])
```

```Python
import torch
import torch.nn as nn


class module(nn.Module):

    def __init__(self):
        super(module, self).__init__()
        self.model1 = nn.Sequential(nn.Conv2d(3, 32, 5, padding=2),
                                    nn.MaxPool2d(2, stride=2),
                                    nn.Conv2d(32, 32, 5, padding=2),
                                    nn.MaxPool2d(2, stride=2),
                                    nn.Conv2d(32, 64, 5, padding=2),
                                    nn.MaxPool2d(2, stride=2), 
                                    nn.Flatten(),
                                    nn.Linear(1024, 64),
                                    nn.Linear(64, 10))

    def forward(self, input):
        output = self.model1(input)
        return output


model = module()
input = torch.ones((64, 3, 32, 32))
output = model(input)
print(output.shape)
```
运行结果为：
```Python
torch.Size([64, 10])
```
