# 项目说明
- 用于生成搜狗站点地图 xml

# 使用方法
- 在 hexo 的根目录中增加 sogousitemap 配置即可，如下：

```sh
sogousitemap:
    url:  XXX                  #[可选]自定义url，不指定则为站点url
    path: sogousitemap.xml     # xml 访问路径
```