---
layout: post
title: Local Aggregation for Unsupervised Learning of Visual Embeddings
author: LemonWhale
excerpt: 
tags:
  - paper
  - 深度学习
  - 无监督学习
---
## [文章来源](https://arxiv.org/abs/1903.12355)

## 摘要
神经网络的无监督学习方法对人工智能的进一步发展具有重要意义，因为它们可以使网络训练不需要大量昂贵的注释，而且因为它们是人类部署的那种通用学习的更好模型。

然而，无监督网络的性能一直落后于有监督网络，特别是在大规模视觉识别领域。最近在训练深度卷积嵌入以最大化非参数实例分离和聚类目标方面的发展已经显示出缩小这一差距的希望。在这里，我们描述了一种方法，该方法训练嵌入函数以最大化局部聚合度量，使相似的数据实例在嵌入空间中一起移动，同时允许不同的实例分离。

这种聚合度量是动态的，允许出现不同规模的软集群。我们在几个大规模的视觉识别数据集上评估了我们的过程，在ImageNet的对象识别、Places 205的场景识别和PASCAL VOC的对象检测上实现了最先进的无监督迁移学习性能。
## 1.相关知识
1. DeepCluster
2. Instance Recognition
3. Self-supervised "missing-data" tasks
4. Generative models
## 2.算法
**总体的目标是学习一个嵌入函数(enbedding function)**


## 3.实验

## 4.结论