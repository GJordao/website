#!/bin/bash

npm run build

npm run export

firebase deploy
