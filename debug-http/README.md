# Debugging HTTP API's Workshop

View online:
https://thomashunter.name/presentations/debug-http-v1

## Synopsys

Learn about a powerful set of tools used by professionals for debugging and communicating about HTTP Requests. First we'll generate requests using Postman, a popular GUI based tool for building and organizing requests into convenient collections. Then we'll examine cURL and jq, two very powerful CLI utilities for interacting with HTTP and transforming JSON data.

## Requirements

Before attending this workshop you should:

* Install Postman
  * Visti: https://getpostman.com/
  * Download and run the installer
* Install cURL and jq
  * OS X and Homebrew
    * `$ brew install jq curl`
  * Debian / Ubuntu Linux
    * `$ sudo apt-get install curl`
  * Download jq binary for your system
    * Visit: https://stedolan.github.io/jq
    * Download binary for your system
    * OS X / Linux: `$ chmod +x ./jq-*`

## Snapshot of Content (may be outdated)

* Content is from a book I'm writing: bit.ly/2hlATo2
* Follow Me: @tlhunter

### Part I: Postman

* Postman is great for non-engineers, it has a GUI
* Ability to Import and Export collections of requests
* Extracts data from URL's and makes them easily editable
* Download the binary for OS X, Windows, or Linux: getpostman.com

#### First Postman Request

* Paste this URL into the Address field:
  * https://api.github.com/users/tlhunter
* Click Headers
  * Enter `Accept` on left and `application/json` on right
* Click "Send"
* See content below, syntax-highlighted JSON

#### Parameter Extraction

* Paste this URL into the Address field:
  * https://api.github.com/users/:username/repos?sort=created&direction=asc
* Click Params
  * Change `username` to `tlhunter`
  * Change `direction` to `desc`
* Click "Send"

#### Environments

* Click Gear in upper right then "Manage Environments"
* Click "Add"
  * Set Environment Name to "Production"
  * Set left value to `github_api`
  * Set right value to `https://api.github.com`
  * Click "Add"
* Click "Add"
  * Set Environment Name to "Development"
  * Set left value to `github_api`
  * Set right value to `http://localhost`
  * Click "Add"
* Close Window
* Select Production in upper right dropdown
* Set Address to `{{github_api}}/users/tlhunter`
* Click "Send"

#### Saving Collections

* Click "Save"
* Set "Request Name" to `Get User`
* Create new collection, `GitHub Sample`
* Click Save
* Expand left hand panel
* Click "GitHub Sample" then "Get User"

#### Importing and Exporting Collections

* Press `Cmd + ,` or `Ctrl + ,`
* Click "Data" tab
* Click the "Download" button and save file
* This file can be shared, emailed, checked into Git
* It will contain all collections and environments

### Part II: cURL + jq

* cURL and jq is great for engineers
* Copy and paste and you're done
* Able to write complex queries to transform data
* Consider it the basis of communication between engineers


#### Installation

* If you're on OS X and have Homebrew, install both easily
  * `$ brew install jq curl`
* Debian / Ubuntu Linux
  * `$ sudo apt-get install curl`
* Download jq binary for your system
  * https://stedolan.github.io/jq/
  * Linux/OS X: Make executable with `chmod +x ./jq-*`
* Or skip the downloads and just experiment online!
  * https://jqplay.org/

#### Simple cURL Request

* Basic cURL request will output response to screen

```bash
curl -X GET -H "Accept: application/json" "https://api.github.com/users/tlhunter"
```

* HTTP method defaults to GET, so we can omit
* GitHub API still works without Accept header, also omit

```bash
curl "https://api.github.com/users/tlhunter"
```

#### Pipe cURL output to jq

* Output of cURL command becomes input to jq command

```bash
curl "https://api.github.com/users/tlhunter" | jq "."
```

#### Save JSON data to file

* Output from a command can be redirected to a file

```bash
curl "https://api.github.com/users/tlhunter" | jq "." > account.json
cat account.json
```

#### Extract partial data

* We can extract and rename attributes from objects

```bash
curl "https://api.github.com/users/tlhunter" | jq '{login, name, url: .html_url}'
```

#### Query Data

* We can perform complex array operations
* Let's query for all repositories that have watchers

```bash
curl "https://api.github.com/users/tlhunter/repos" | jq \
  '[.[] | {full_name, watchers_count}] | map(select(.watchers_count >= 1))'
```

* Manual: stedolan.github.io/jq/manual


### Conclusion

* Postman is great for sharing pre-defined collections of requests
* cURL and jq is great for sharing example requests with developers
* Postman has a "Code" button which will generate a cURL for you!
