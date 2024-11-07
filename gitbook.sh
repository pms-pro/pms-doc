#!/usr/bin/env sh

# 函数：执行 Git 操作并显示消息
git_operation() {
    echo "$1"
    sleep 1  # 增加睡眠时间以便观察
    git $2
}

# 输出调试信息
echo "提交信息: $1"

# 检查当前目录是否是 Git 仓库
if ! git rev-parse --is-inside-work-tree &>/dev/null; then
    echo "错误：当前目录不是一个 Git 仓库。"
    exit 1
fi

# 更新本地代码
git_operation "🎉 开始更新仓库 git pull" pull

# 检查是否有文件被修改
if [ -z "$(git status --porcelain)" ]; then
    echo "没有文件被修改，无需提交。"
    exit 2
fi

# 添加本地文件
#git_operation "🐧 添加本地文件 git add ." add .

# 再次检查是否有文件被添加到暂存区
#if [ -z "$(git diff --cached --name-only)" ]; then
#    echo "错误：没有文件被添加到暂存区。"
#    exit 2
#fi

# 提交更新
#git_operation "💡 提交更新 git commit -m '$1'" commit -m "'$1'"

# 推送仓库
# 如果你想要推送，可以取消下面这一行的注释
#git_operation "🖥️ 推送仓库 git push -u origin master" push -f git@github.com:pms-pro/pms-doc.git master
git push -f git@github.com:pms-pro/pms-doc.git master