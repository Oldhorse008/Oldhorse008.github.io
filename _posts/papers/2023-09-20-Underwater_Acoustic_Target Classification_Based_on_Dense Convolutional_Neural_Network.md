---
layout: post
title: "Underwater Acoustic Target Classification Based\ron Dense Convolutional Neural Network"
author: LemonWhale
excerpt: 
tags:
  - paper
  - underwater_acoustic
  - CNN
---
## [文章来源](https://ieeexplore.ieee.org/document/9229102 "Underwater Acoustic Target Classification Based on Dense Convolutional Neural Network")
IEEE Geoscience and Remote Sensing Letters

## 摘要
在海洋遥感作业中，水声目标识别一直是声纳系统的一项困难而又极其重要的任务，特别是在声波传播特性复杂的情况下。用于大数据分析的昂贵的学习识别模型通常是大多数传统机器学习(ML)算法的障碍，而卷积神经网络(CNN)是一种深度神经网络，可以自动提取特征以进行准确分类。在这项研究中，我们提出了一种使用密集CNN模型进行水下目标识别的方法。该网络架构巧妙地重用了所有以前的特征映射，以优化各种受损条件下的分类率，同时满足较低的计算成本。此外，该方案不使用时频谱图图像，而是直接利用时域的原始音频信号作为网络输入数据。基于被动声呐真实数据集的实验结果，我们的分类模型在 0 db信噪比(SNR)下的总体准确率达到98.85%，优于传统的机器学习技术以及其他最先进的CNN模型。
## 相关知识
1. 水声环境中有效信息：船舶螺旋桨、海洋动物（哺乳动物）的叫声、其他环境实体发出具有各种特性的声信号

1. 分类过程：大多由声呐操作员完成，人工昂贵且费时；低信噪比和声音传播多径条件下可能识别错误

1. underwater acoustic(UA)分类是通过对时间和频谱特性等手工特征进行专业处理而发展起来的，但现在这些特征已经制约了它的效率

1. 特征提取技术：时间、频率、时频组合域

1. 本文提出的网络架构可以避免梯度消失问题，可以通过自适应结构来减少学习参数的数量

1. 使用真实的水声数据进行性能评估，在0db的信噪比下的分类率高达98.85%

## 提出的模型
1. 提出了Underwater Acoustic Target Classfication DenseNet(UATC-DenseNet)，即水声目标分类DenseNet，进行十二种不同声音的分类

1. 被动声呐监视系统如图所示![](/attachment/papers/Underwater_Acoustic_Target_Classification_Based_on_Dense_Convolutional_Neural_Network/被动声学检测系统.png)vessel: 船; hydrophone: 水听器; fiber cable: 光缆; surveillance system: 监控系统; preprogressing unit: 预处理单元; multistore: 多存储器

1. 网络架构类似于图像处理的架构，输入为一维时间序列，具体如图所示：![](/attachment/papers/Underwater_Acoustic_Target_Classification_Based_on_Dense_Convolutional_Neural_Network/网络架构.png)

1. 数据预处理：将原始数据分为多帧，采样大小为1×4096；

1. 卷积块：卷积层、最大池化层、激活层；卷积层为32个1×7的卷积核，生成32个特征映射；池化层下采样，池大小为1×3，步幅为(1,2)；激活层并没有采用常用的ReLU函数（整流线性单元，可以快速收敛），而是为了避免小于零时信息的丢失采用了eLU函数（指数线性单元），正输出为线性运算，负输出为指数非线性运算

1. 注意：激活函数的输入是池化后的特征映射池，在整体架构上，UATC-DenseNet有一个骨干流和几个跳接

1. 主流程由三个卷积块重叠，用于提取深度特征；与传统的cnn相比，**跳接**可以优化许多以前的卷积块中提取的特征映射的利用，并且可以保护网络免受**梯度消失问题**的困扰

1. 跳接的三种方法：加法操作、横向连接和深度连接。出于计算复杂度的考虑，在此网络中使用深度连接，将输入特征合并到深度维度中，由于跳接是按照不同尺度的特征进行的，所以必须组装最大池化层来重新缩放映射的空间维度，以适应骨干流的体积大小，其中输出由ymaxpool表示，令yblock为每个卷积块的输出

1. 根据跳接的机制，在最后一次串接时，输出包含主干（即最后一个卷积块）的特征和前一个卷积块的归一化(norm)信息。在网络架构的最后，UATC-DenseNet最终确定了一个输出块，包括池大小为1 × 8，步长为(1,8)的平均池化层、eLU激活层、完全连接层、softmax层和输出层(也称为分类层)。平均池化层被配置为复合所有高度判别的特征，而不是只提取最大值。另外，在全连接层中指定12个神经元对应12个目标类进行分类。在完全连接层的输出之后是softmax层和分类层，其中softmax函数与UA目标的类别合作产生十进制概率，最终根据概率最高的类确定传入信号X的目标

1. 性能实验：采样率：22050Hz 音频信号：12个（11有目标和1含噪空白信号）扩充数据集：人为加噪，使信噪比在[-20,10]db之间，梯度为2db，切割信号，每帧含有4096个振幅样本，总共合计有192000个信号帧，其中70%用于训练集，30%用于测试集

## 实验
1. 证明了UATC-DenseNet在低信噪比条件下的效率，并验证了其鲁棒性
2. 与现有的DeepLearning模型进行了比较
3. epochs: 40 batch-size: 64 learning-rate: 0.001 为了防止过拟合，**dropout**参数设置为20%，和0.0001的**L2正则化**
4. 
## 结论