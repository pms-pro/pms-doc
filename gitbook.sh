#!/usr/bin/env sh

# 函数：执行 Git 操作并显示消息
git_operation() {
    echo "$1"
    sleep 1  # 增加睡眠时间以便观察
    git $2
}

# 检查当前目录是否是 Git 仓库
if ! git rev-parse --is-inside-work-tree &>/dev/null; then
    echo "错误：当前目录不是一个 Git 仓库。"
    exit 1
fi

# 更新本地代码
git_operation "🎉 开始更新仓库 git pull" pull

# 推送仓库
echo "🖥️ 推送仓库 git push -u origin master"
sleep 1  # 增加睡眠时间以便观察
git push -f git@github.com:pms-pro/pms-doc.git master