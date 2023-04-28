---
layout: post
title: Tensorboard
tags: 
- Pytorch
- 深度学习
---
用处：**绘制训练图像**

**导入和使用到的函数**

```Python
from torch.utils.tensorboard import SummaryWriter
#SummaryWriter是一个实例

add_image()
# tag对应标题，image_tensor(tensor or numpy)，global_step
# numpy的dataformats可以是(HWC,CHW,HW)，但是要在函数中声明，object.shape查看格式

add_scalar(tag,scalar_value,global_step)
# tag对应标题，scalar_value对应y轴，global_step对应x轴

# 实例化类SummaryWriter()
writer = SummaryWriter("logs")
```

⚠️ *add_scalar会保留以前的进程，导致画出来的图有问题*
**解决方法**：删除之前的文件或者创建子进程

```Python
# 创建子进程的方法

import multiprocessing

def square(x):
    print(x ** 2)

p = multiprocessing.Process(target=square, args=(10,))
p.start() # 启动子进程
p.join() # 等待子进程结束
```

**Process类**的参数有：
- target (callable)：子进程要执行的函数
- args (tuple)：传递给target函数的参数
- kwargs (dict)：传递给target函数的关键字参数
- name (str)：子进程的名称
- daemon (bool)：子进程是否为守护进程

在端口中查看 *`tensorboard --logdir==logs(tag)`*





