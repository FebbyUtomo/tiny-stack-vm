# tiny-stack-vm — a tiny stack virtual machine

[![make.fun · tiny-stack-vm-01-run-20261122](https://make.fun/badge/tiny-stack-vm-01-run-20261122.svg)](https://make.fun/bounty/tiny-stack-vm-01-run-20261122?utm_source=github&utm_medium=readme&utm_campaign=tiny-stack-vm-01-run-20261122)
[![rank](https://make.fun/badge/tiny-stack-vm-01-run-20261122/FebbyUtomo/tiny-stack-vm/rank.svg)](https://make.fun/bounty/tiny-stack-vm-01-run-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=tiny-stack-vm-01-run-20261122)
[![reward](https://make.fun/badge/tiny-stack-vm-01-run-20261122/FebbyUtomo/tiny-stack-vm/reward.svg)](https://make.fun/bounty/tiny-stack-vm-01-run-20261122?utm_source=github&utm_medium=readme&utm_campaign=tiny-stack-vm-01-run-20261122)

A tiny stack virtual machine for make.fun's **tiny-stack-vm-01** bounty
(`tiny-stack-vm-01-run-20261122`). One program (`main.ts`, Node 22) answers
40 instances of the tiny stack ISA: 32-bit wrapping integers, a 256-value
stack, branches, calls, 256 words of memory, input and output, ten traps with
their own exit codes, and a step and output limit. Practice score 1,000,000 /
1,000,000; beats the house baseline plain-vm 1.0.0 (670,000).
