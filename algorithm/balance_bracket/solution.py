#!/bin/python3

import math
import os
import random
import re
import sys

def isPair(open, close):
  if open == "(" and close == ")":
    return True
  elif open == "{" and close == "}":
    return True
  elif open == "[" and close == "]":
    return True
  return False

def isOpen(param):
  if param in ("(", "{", "["):
    return True
  return False

def isClose(param):
  if param in (")", "}", "]"):
    return True
  return False
  

# Complete the isBalanced function below.
def isBalanced(string):
  temporary = []
  brackets = list(string)

  for item in brackets:

    if len(temporary) == 0 and isClose(brackets):
      return "NO"

    if isOpen(item):
      temporary.append(item)
    
    if isClose(item):
      prevBracket = temporary[-1]
      if isPair(prevBracket, item):
        temporary.pop()
      else:
        return "NO"

        
  print(temporary)
  if len(temporary) == 0:
    return "YES"
  
  return "NO"


if __name__ == '__main__':
  test1 = "{(([])[])[]]}"
  test2 = "{[()]}"

  result = isBalanced(test1)
  print(result)