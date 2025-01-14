/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./functions/add-chat-wapi.js":
/*!************************************!*\
  !*** ./functions/add-chat-wapi.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addChatWapi": () => (/* binding */ addChatWapi)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper */ "./helper/index.js");


async function addChatWapi() {
  window[_helper__WEBPACK_IMPORTED_MODULE_0__.injectConfig.webpack].push([
    [_helper__WEBPACK_IMPORTED_MODULE_0__.injectConfig.parasite],
    {},
    async function (o) {
      let modules = [];
      for (let idx in o.m) {
        modules.push(o(idx));
      }

      const filterMod = await (0,_helper__WEBPACK_IMPORTED_MODULE_0__.filterModule)(_helper__WEBPACK_IMPORTED_MODULE_0__.filterObjects, modules);

      filterMod.forEach((needObj) => {
        if (needObj.yesModule) {
          if (!window.Store[needObj.type]) {
            window.Store[needObj.type] = needObj.yesModule;
          }
        }
      });

      if (Store && Store.BusinessProfile) {
        Store.Chat._findAndParse = Store.BusinessProfile._findAndParse;
        Store.Chat._find = Store.BusinessProfile._find;
      }
    }
  ]);
}


/***/ }),

/***/ "./functions/add-participant.js":
/*!**************************************!*\
  !*** ./functions/add-participant.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addParticipant": () => (/* binding */ addParticipant)
/* harmony export */ });
async function addParticipant(groupId, contactsId) {
  const chat = Store.Chat.get(groupId);

  if (!Array.isArray(contactsId)) {
    contactsId = [contactsId];
  }

  contactsId = await Promise.all(contactsId.map((c) => WAPI.sendExist(c)));
  if (!contactsId.length) {
    return false;
  }

  try {
    await Store.Participants.addParticipants(chat, contactsId);
    return true;
  } catch {
    return false;
  }
}


/***/ }),

/***/ "./functions/archive-chat.js":
/*!***********************************!*\
  !*** ./functions/archive-chat.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "archiveChat": () => (/* binding */ archiveChat)
/* harmony export */ });
async function archiveChat(idUser, type) {
  const chat = await WAPI.sendExist(idUser);
  if (typeof type !== 'boolean') {
    return WAPI.scope(
      undefined,
      true,
      null,
      'Use true to archive or false to unarchive'
    );
  }
  if (chat && chat.status != 404) {
    const archive = await window.chatOptions.archiveChat(chat, type);
    return WAPI.scope(undefined, false, archive, undefined);
  } else {
    return chat;
  }
}


/***/ }),

/***/ "./functions/are-all-messages-loaded.js":
/*!**********************************************!*\
  !*** ./functions/are-all-messages-loaded.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "areAllMessagesLoaded": () => (/* binding */ areAllMessagesLoaded)
/* harmony export */ });
function areAllMessagesLoaded(id, done) {
  const found = WAPI.getChat(id);
  if (!found.msgs.msgLoadState.noEarlierMsgs) {
    if (done) done(false);
    return false;
  }
  if (done) done(true);
  return true;
}


/***/ }),

/***/ "./functions/block-contact.js":
/*!************************************!*\
  !*** ./functions/block-contact.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "blockContact": () => (/* binding */ blockContact)
/* harmony export */ });
async function blockContact(_id) {
  if (!_id) {
    return false;
  }
  const __contact = window.Store.Contact.get(_id);
  if (__contact !== undefined) {
    await Store.Block.blockContact(__contact);
    return true;
  } else {
    return false;
  }
}


/***/ }),

/***/ "./functions/block-list.js":
/*!*********************************!*\
  !*** ./functions/block-list.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBlockList": () => (/* binding */ getBlockList)
/* harmony export */ });
async function getBlockList() {
  let _l = await Store.Blocklist,
    __numbers = [];
  if (_l !== undefined && _l._index !== undefined) {
    for (let _n in _l._index) {
      __numbers.push(_n);
    }
    return __numbers;
  }
  return false;
}


/***/ }),

/***/ "./functions/check-beta.js":
/*!*********************************!*\
  !*** ./functions/check-beta.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isBeta": () => (/* binding */ isBeta)
/* harmony export */ });
async function isBeta() {
  if (
    !window.localStorage.getItem('WASecretBundle') &&
    !window.localStorage.getItem('WAToken1') &&
    !window.localStorage.getItem('WAToken2')
  ) {
    return true;
  }
  return false;
}


/***/ }),

/***/ "./functions/check-id-messagem.js":
/*!****************************************!*\
  !*** ./functions/check-id-messagem.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkIdMessage": () => (/* binding */ checkIdMessage)
/* harmony export */ });
async function checkIdMessage(chatId, idMesagem) {
  if (typeof chatId != 'string') {
    return WAPI.scope(
      null,
      true,
      404,
      'enter the chatId variable as an string'
    );
  }
  const chat = await WAPI.sendExist(chatId);
  if (chat && chat.status != 404) {
    const getIdMessage = await window.Store.Msg.get(idMesagem);
    if (!getIdMessage) {
      return WAPI.scope(chat, true, 404, `The id ${idMesagem} does not exist!`);
    }
    const To = chat.id;
    const m = { type: 'checkIdMessage' };
    let obj = WAPI.scope(To, false, 'OK', '');
    Object.assign(obj, m);
    return obj;
  } else {
    return chat;
  }
}


/***/ }),

/***/ "./functions/check-number-status.js":
/*!******************************************!*\
  !*** ./functions/check-number-status.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkNumberStatus": () => (/* binding */ checkNumberStatus)
/* harmony export */ });
async function checkNumberStatus(id, conn = false) {
  try {
    const err = { error: 404 };
    const connection =
      window.Store &&
      window.Store.State &&
      window.Store.State.Socket &&
      window.Store.State.Socket.state
        ? window.Store.State.Socket.state
        : '';
    const checkType = WAPI.sendCheckType(id);
    if (!!checkType && checkType.status === 404) {
      Object.assign(err, {
        text: checkType.text,
        numberExists: null
      });
      throw err;
    }

    if (conn === true) {
      if (connection !== 'CONNECTED') {
        Object.assign(err, {
          text: 'No connection with WhatsApp',
          connection: connection,
          numberExists: null
        });
        throw err;
      }
    }

    const lid = await WAPI.getChat(id);
    if (lid) {
      return await Store.checkNumber
        .queryWidExists(lid.id)
        .then((result) => {
          if (!!result && typeof result === 'object') {
            const data = {
              status: 200,
              numberExists: true,
              id: result.wid
            };
            return data;
          }
          throw Object.assign(err, {
            connection: connection,
            numberExists: false,
            text: `The number does not exist`
          });
        })
        .catch((err) => {
          if (err.text) {
            throw err;
          }
          throw Object.assign(err, {
            connection: connection,
            numberExists: false,
            text: err
          });
        });
    } else {
      throw Object.assign(err, {
        connection: connection,
        numberExists: false
      });
    }
  } catch (e) {
    return {
      status: e.error,
      text: e.text,
      numberExists: e.numberExists,
      connection: e.connection
    };
  }
}


/***/ }),

/***/ "./functions/check-send-exist.js":
/*!***************************************!*\
  !*** ./functions/check-send-exist.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getchatId": () => (/* binding */ getchatId),
/* harmony export */   "returnChat": () => (/* binding */ returnChat),
/* harmony export */   "scope": () => (/* binding */ scope),
/* harmony export */   "sendCheckType": () => (/* binding */ sendCheckType),
/* harmony export */   "sendExist": () => (/* binding */ sendExist)
/* harmony export */ });
async function scope(id, erro, status, text = null) {
  const me = await WAPI.getHost();
  let e = {
    me: me,
    to: id,
    erro: erro,
    text: text,
    status: status
  };
  return e;
}

async function getchatId(chatId) {
  if (chatId) {
    let to = await WAPI.getChatById(chatId);
    if (to && typeof to === 'object') {
      let objTo = to.lastReceivedKey;
      if (objTo && typeof objTo === 'object') {
        let extend = {
          formattedName: to.contact.formattedName,
          isBusiness: to.contact.isBusiness,
          isMyContact: to.contact.isMyContact,
          verifiedName: to.contact.verifiedName,
          pushname: to.contact.pushname,
          isOnline: to.isOnline
        };
        Object.assign(objTo, extend);
        return objTo;
      }
    }
  }
  return undefined;
}

function sendCheckType(chatId = undefined) {
  if (!chatId) {
    return WAPI.scope(chatId, true, 404, 'It is necessary to pass a number!');
  }
  if (typeof chatId === 'string') {
    const contact = '@c.us';
    const broadcast = '@broadcast';
    const grup = '@g.us';
    if (
      contact !== chatId.substr(-contact.length, contact.length) &&
      broadcast !== chatId.substr(-broadcast.length, broadcast.length) &&
      grup !== chatId.substr(-grup.length, grup.length)
    ) {
      return WAPI.scope(
        chatId,
        true,
        404,
        'The chat number must contain the parameters @c.us, @broadcast or @g.us. At the end of the number!'
      );
    }
    if (
      contact === chatId.substr(-contact.length, contact.length) &&
      ((chatId.match(/(@c.us)/g) && chatId.match(/(@c.us)/g).length > 1) ||
        !chatId.match(/^(\d+(\d)*@c.us)$/g))
    ) {
      return WAPI.scope(
        chatId,
        true,
        404,
        'incorrect parameters! Use as an example: 000000000000@c.us'
      );
    }

    if (
      broadcast === chatId.substr(-broadcast.length, broadcast.length) &&
      (chatId.match(/(@broadcast)/g).length > 1 ||
        (!chatId.match(/^(\d+(\d)*@broadcast)$/g) &&
          !chatId.match(/^(status@broadcast)$/g)))
    ) {
      return WAPI.scope(
        chatId,
        true,
        404,
        'incorrect parameters! Use as an example: 0000000000@broadcast'
      );
    }

    if (
      grup === chatId.substr(-grup.length, grup.length) &&
      ((chatId.match(/(@g.us)/g) && chatId.match(/(@g.us)/g).length > 1) ||
        !chatId.match(/^(\d+(-)+(\d)|\d+(\d))*@g.us$/g))
    ) {
      return WAPI.scope(
        chatId,
        true,
        404,
        'incorrect parameters! Use as an example: 00000000-000000@g.us or 00000000000000@g.us'
      );
    }
  }
}

async function returnChat(chatId, returnChat = true, Send = true) {
  const checkType = WAPI.sendCheckType(chatId);
  if (!!checkType && checkType.status === 404) {
    return checkType;
  }

  let chat = await window.WAPI.getChat(chatId);
  if (!chat) {
    var idUser = new window.Store.UserConstructor(chatId, {
      intentionallyUsePrivateConstructor: true
    });
    chat = await Store.Chat.find(idUser);
  }

  if (chat === undefined) {
    const storeChat = await window.Store.Chat.find(chatId);
    if (storeChat) {
      chat =
        storeChat && storeChat.id && storeChat.id._serialized
          ? await window.WAPI.getChat(storeChat.id._serialized)
          : undefined;
    }
  }

  if (!chat) {
    return WAPI.scope(chatId, true, 404);
  }

  if (Send) {
    await window.Store.ReadSeen.sendSeen(chat, false);
  }

  if (returnChat) {
    return chat;
  }

  return WAPI.scope(chatId, false, 200);
}

async function sendExist(chatId, returnChat = true, Send = true) {
  const checkType = await WAPI.sendCheckType(chatId);
  if (!!checkType && checkType.status === 404) {
    return checkType;
  }

  let ck = await window.WAPI.checkNumberStatus(chatId, false);

  if (
    (ck.status === 404 &&
      !chatId.includes('@g.us') &&
      !chatId.includes('@broadcast')) ||
    (ck &&
      ck.text &&
      typeof ck.text.includes === 'function' &&
      ck.text.includes('XmppParsingFailure'))
  ) {
    return WAPI.scope(chatId, true, ck.status, 'The number does not exist');
  }

  const chatWid = new Store.WidFactory.createWid(chatId);

  let chat =
    ck && ck.id && ck.id._serialized
      ? await window.WAPI.getChat(ck.id._serialized)
      : undefined;

  if (ck.numberExists && chat === undefined) {
    var idUser = new window.Store.UserConstructor(chatId, {
      intentionallyUsePrivateConstructor: true
    });
    chat = await Store.Chat.find(idUser);
  }

  if (!chat) {
    const storeChat = await window.Store.Chat.find(chatWid);
    if (storeChat) {
      chat =
        storeChat && storeChat.id && storeChat.id._serialized
          ? await window.WAPI.getChat(storeChat.id._serialized)
          : undefined;
    }
  }

  if (!ck.numberExists && !chat.t && chat.isUser) {
    return WAPI.scope(chatId, true, ck.status, 'The number does not exist');
  }

  if (!ck.numberExists && !chat.t && chat.isGroup) {
    return WAPI.scope(
      chatId,
      true,
      ck.status,
      'The group number does not exist on your chat list, or it does not exist at all!'
    );
  }

  if (
    !ck.numberExists &&
    !chat.t &&
    chat.id &&
    chat.id.user != 'status' &&
    chat.isBroadcast
  ) {
    return WAPI.scope(
      chatId,
      true,
      ck.status,
      'The transmission list number does not exist on your chat list, or it does not exist at all!'
    );
  }

  if (!chat) {
    return WAPI.scope(chatId, true, 404);
  }

  if (Send) {
    await window.Store.ReadSeen.sendSeen(chat, false);
  }

  if (returnChat) {
    return chat;
  }

  return WAPI.scope(chatId, false, 200);
}


/***/ }),

/***/ "./functions/clear-chat.js":
/*!*********************************!*\
  !*** ./functions/clear-chat.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearChatMessages": () => (/* binding */ clearChatMessages)
/* harmony export */ });
async function clearChatMessages(chatId) {
  const chat = await Store.Chat.get(chatId);
  if (chat) {
    return await Store.ChatUtil.sendClear(chat, chat.lastReceivedKey, true);
  } else {
    return false;
  }
}


/***/ }),

/***/ "./functions/create-community.js":
/*!***************************************!*\
  !*** ./functions/create-community.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCommunity": () => (/* binding */ createCommunity)
/* harmony export */ });
async function createCommunity(name, desc) {
  try {
    const options = {
      name: name,
      desc: desc,
      closed: true
    };
    await window.Store.SendCommunity.sendCreateCommunity(options);
    return true;
  } catch {
    return false;
  }
}


/***/ }),

/***/ "./functions/create-group.js":
/*!***********************************!*\
  !*** ./functions/create-group.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createGroup": () => (/* binding */ createGroup)
/* harmony export */ });
async function createGroup(name, contactsId) {
  if (!Array.isArray(contactsId)) {
    contactsId = [contactsId];
  }

  contactsId = await Promise.all(contactsId.map((c) => WAPI.sendExist(c)));
  contactsId = contactsId.filter((c) => !c.erro && c.isUser);

  if (!contactsId.length) {
    return false;
  }
  return await window.Store.createGroup(name, undefined, undefined, contactsId);
}


/***/ }),

/***/ "./functions/delete-conversation.js":
/*!******************************************!*\
  !*** ./functions/delete-conversation.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteConversation": () => (/* binding */ deleteConversation)
/* harmony export */ });
function deleteConversation(chatId, done) {
  let userId = new window.Store.UserConstructor(chatId, {
    intentionallyUsePrivateConstructor: true
  });
  let conversation = WAPI.getChat(userId);

  if (!conversation) {
    if (done !== undefined) {
      done(false);
    }
    return false;
  }

  window.Store.sendDelete(conversation, false)
    .then(() => {
      if (done !== undefined) {
        done(true);
      }
    })
    .catch(() => {
      if (done !== undefined) {
        done(false);
      }
    });

  return true;
}


/***/ }),

/***/ "./functions/delete-messages.js":
/*!**************************************!*\
  !*** ./functions/delete-messages.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteMessages": () => (/* binding */ deleteMessages)
/* harmony export */ });
async function deleteMessages(chatId, messageArray) {
  if (typeof chatId != 'string') {
    return WAPI.scope(
      null,
      true,
      404,
      'enter the chatid variable as an string'
    );
  }
  const chat = await WAPI.sendExist(chatId);
  if (chat && chat.status != 404) {
    if (!Array.isArray(messageArray)) {
      return WAPI.scope(
        chat,
        true,
        404,
        'enter the message identification variable as an array'
      );
    }

    for (let i in messageArray) {
      if (typeof messageArray[i] === 'string') {
        let checkID = await WAPI.checkIdMessage(chatId, messageArray[i]);
        if (checkID.erro == true) {
          return checkID;
        }
      }
    }

    let messagesToDelete = (
      await Promise.all(
        messageArray.map(
          async (msgId) => await WAPI.getMessageById(msgId, null, false)
        )
      )
    ).filter((x) => x);

    const To = chat.id;
    const m = { type: 'deleteMessages' };

    let jobs = [
      chat.sendRevokeMsgs(
        messagesToDelete.filter((msg) => !msg.isSentByMe),
        chat
      ),
      chat.sendDeleteMsgs(
        messagesToDelete.filter((msg) => msg.isSentByMe),
        chat
      )
    ];
    try {
      var result = (await Promise.all(jobs))[1];

      if (result >= 0) {
        let obj = WAPI.scope(To, false, result, '');
        Object.assign(obj, m);
        return obj;
      }
    } catch (e) {
      let obj = WAPI.scope(
        null,
        true,
        result,
        'The message has not been deleted'
      );
      Object.assign(obj, m);
      return obj;
    }
    let obj = WAPI.scope(To, true, result, '');
    Object.assign(obj, m);
    return obj;
  } else {
    if (!chat.erro) {
      chat.erro = true;
    }
    return chat;
  }
}


/***/ }),

/***/ "./functions/demote-participant.js":
/*!*****************************************!*\
  !*** ./functions/demote-participant.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "demoteParticipant": () => (/* binding */ demoteParticipant)
/* harmony export */ });
async function demoteParticipant(groupId, contactsId, done) {
  const chat = Store.Chat.get(groupId);

  if (!Array.isArray(contactsId)) {
    contactsId = [contactsId];
  }

  contactsId = await Promise.all(contactsId.map((c) => WAPI.sendExist(c)));
  contactsId = contactsId
    .filter((c) => !c.erro && c.isUser)
    .map((c) => chat.groupMetadata.participants.get(c.id))
    .filter((c) => typeof c !== 'undefined')
    .map((c) => c.id);

  if (!contactsId.length) {
    typeof done === 'function' && done(false);
    return false;
  }

  await window.Store.WapQuery.demoteParticipants(chat.id, contactsId);

  const participants = contactsId.map((c) =>
    chat.groupMetadata.participants.get(c)
  );

  await window.Store.Participants.demoteParticipants(chat, participants);

  typeof done === 'function' && done(true);
  return true;
}


/***/ }),

/***/ "./functions/download-file-with-credentials.js":
/*!*****************************************************!*\
  !*** ./functions/download-file-with-credentials.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "downloadFile": () => (/* binding */ downloadFile)
/* harmony export */ });
async function downloadFile(url) {
  return await new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          let reader = new FileReader();
          reader.readAsDataURL(xhr.response);
          reader.onload = function (e) {
            resolve(reader.result.substr(reader.result.indexOf(',') + 1));
          };
        } else {
          console.error(xhr.statusText);
        }
      } else {
        // console.log(err);
        resolve(false);
      }
    };
    xhr.open('GET', url, true);
    xhr.responseType = 'blob';
    xhr.send(null);
  });
}


/***/ }),

/***/ "./functions/download-media.js":
/*!*************************************!*\
  !*** ./functions/download-media.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "downloadMedia": () => (/* binding */ downloadMedia)
/* harmony export */ });
async function downloadMedia(messageId) {
  const msg = await WAPI.getMessageById(messageId, null, false);

  if (!msg) {
    throw {
      error: true,
      code: 'message_not_found',
      message: 'Message not found'
    };
  }
  if (!msg.mediaData) {
    throw {
      error: true,
      code: 'message_not_contains_media',
      message: 'Message not contains media'
    };
  }

  await msg.downloadMedia(true, 1);

  let blob = null;

  if (msg.mediaData.mediaBlob) {
    blob = msg.mediaData.mediaBlob.forceToBlob();
  } else if (msg.mediaData.filehash) {
    blob = Store.BlobCache.get(msg.mediaData.filehash);
  }

  // Transform a VIDEO message to a DOCUMENT message
  if (!blob && msg.mediaObject.type && msg.mediaObject.type === 'VIDEO') {
    delete msg.mediaObject.type;
    msg.type = 'document';
    return downloadMedia(messageId);
  }

  if (!blob) {
    throw {
      error: true,
      code: 'media_not_found',
      message: 'Media not found'
    };
  }

  return await new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.onloadend = function (e) {
      resolve(reader.result);
    };
    reader.onabort = reject;
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}


/***/ }),

/***/ "./functions/encrypt-and-upload-file.js":
/*!**********************************************!*\
  !*** ./functions/encrypt-and-upload-file.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "encryptAndUploadFile": () => (/* binding */ encryptAndUploadFile)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper */ "./helper/index.js");


async function encryptAndUploadFile(type, blob) {
  try {
    const filehash = await (0,_helper__WEBPACK_IMPORTED_MODULE_0__.getFileHash)(blob);
    const mediaKey = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.generateMediaKey)(32);
    const controller = new AbortController();
    const signal = controller.signal;
    const encrypted = await window.Store.UploadUtils.encryptAndUpload({
      blob,
      type,
      signal,
      mediaKey
    });
    return {
      ...encrypted,
      clientUrl: encrypted.url,
      filehash,
      id: filehash,
      uploadhash: encrypted.encFilehash,
      mediaBlob: blob
    };
  } catch {
    return false;
  }
}


/***/ }),

/***/ "./functions/fix-chat.js":
/*!*******************************!*\
  !*** ./functions/fix-chat.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pinChat": () => (/* binding */ pinChat)
/* harmony export */ });
async function pinChat(chatId, type = true, notExist = false) {
  if (typeof type != 'boolean' || typeof notExist != 'boolean') {
    var text = 'incorrect parameter, insert a boolean true or false';
    return WAPI.scope(chatId, true, null, text);
  }
  let typeFix = type ? 'pin' : 'unpin',
    retult = void 0;
  var chat = await WAPI.sendExist(chatId, true, notExist);
  if (!chat.erro) {
    var m = {
        type: 'pinChat',
        typefix: typeFix
      },
      To = await WAPI.getchatId(chat.id);
    await Store.pinChat
      .setPin(chat, type)
      .then((_) => {
        var obj = WAPI.scope(To, false, 'OK', null);
        Object.assign(obj, m);
        retult = obj;
      })
      .catch((error) => {
        var obj = WAPI.scope(To, true, error, 'Pin Chat first');
        Object.assign(obj, m);
        retult = obj;
      });
    return retult;
  } else {
    return chat;
  }
}


/***/ }),

/***/ "./functions/forward-messages.js":
/*!***************************************!*\
  !*** ./functions/forward-messages.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "forwardMessages": () => (/* binding */ forwardMessages)
/* harmony export */ });
async function forwardMessages(chatId, messages, skipMyMessages) {
  var chat = await WAPI.sendExist(chatId);

  if (!Array.isArray(messages)) {
    messages = [messages];
  }

  var toForward = (
    await Promise.all(
      messages.map(async (msg) => {
        return await WAPI.getMessageById(msg, null, false);
      })
    )
  ).filter((msg) => (skipMyMessages ? !msg.__x_isSentByMe : true));

  var m = { type: 'forwardMessages' };

  return new Promise(async (resolve, reject) => {
    let newMsgId = await window.WAPI.getNewMessageId(chat.id._serialized);
    let inChat = await WAPI.getchatId(chat.id).catch(() => {});
    if (inChat) {
      chat.lastReceivedKey._serialized = inChat._serialized;
      chat.lastReceivedKey.id = inChat.id;
    }
    if (chat.id) {
      await Promise.each(toForward, async (e) => {
        if (typeof e.erro !== 'undefined' && e.erro === true) {
          var obj = WAPI.scope(chatId, true, null, 'message not found');
          Object.assign(obj, m);
          reject(obj);
          return;
        }

        let tempMsg = await Object.create(
          chat.msgs.filter((msg) => msg.__x_isSentByMe)
        )[0];
        const fromwWid = await Store.MaybeMeUser.getMaybeMeUser();
        let toFor = await Object.assign(e);
        let extend = {
          id: newMsgId,
          ack: 0,
          from: fromwWid,
          to: chat.id,
          local: !0,
          self: 'out',
          t: parseInt(new Date().getTime() / 1000),
          isNewMsg: !0,
          isForwarded: true,
          forwardingScore: 1,
          multicast: true,
          __x_isSentByMe: true
        };

        Object.assign(tempMsg, toFor);
        Object.assign(tempMsg, extend);

        return await Store.addAndSendMsgToChat(chat, tempMsg);
      })
        .then(async () => {
          var obj = WAPI.scope(newMsgId, false, 200, null);
          Object.assign(obj, m);
          resolve(obj);
        })
        .catch(() => {
          var obj = WAPI.scope(newMsgId, true, 404, null);
          Object.assign(obj, m);
          reject(obj);
        });
    } else {
      reject(chat);
    }
  });
}


/***/ }),

/***/ "./functions/get-all-chats-ids.js":
/*!****************************************!*\
  !*** ./functions/get-all-chats-ids.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAllChatIds": () => (/* binding */ getAllChatIds)
/* harmony export */ });
const getAllChatIds = function (done) {
  const chatIds = window.Store.Chat.map(
    (chat) => chat.id._serialized || chat.id
  );

  if (done !== undefined) done(chatIds);
  return chatIds;
};


/***/ }),

/***/ "./functions/get-all-chats-with-messages.js":
/*!**************************************************!*\
  !*** ./functions/get-all-chats-with-messages.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAllChatsWithMessages": () => (/* binding */ getAllChatsWithMessages)
/* harmony export */ });
async function getAllChatsWithMessages(newOnly) {
  const x = [];
  if (newOnly) {
    x.push(
      WAPI.getAllChatsWithNewMsg().map((c) => WAPI.getChat(c.id._serialized))
    );
  } else {
    x.push(WAPI.getAllChatIds().map((c) => WAPI.getChat(c)));
  }
  const _result = (await Promise.all(x)).flatMap((x) => x);
  const result = JSON.stringify(_result);
  return JSON.parse(result);
}


/***/ }),

/***/ "./functions/get-all-chats.js":
/*!************************************!*\
  !*** ./functions/get-all-chats.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAllChats": () => (/* binding */ getAllChats)
/* harmony export */ });
const getAllChats = async function (done) {
  const fromwWid = await Store.MaybeMeUser.getMaybeMeUser();
  if (fromwWid) {
    const idUser = await WAPI.sendExist(fromwWid._serialized);
    if (idUser && idUser.status !== 404) {
      const chats = window.Store.Chat.map((chat) =>
        WAPI._serializeChatObj(chat)
      );

      if (done !== undefined) done(chats);
      return chats;
    }
  }
};


/***/ }),

/***/ "./functions/get-all-contacts.js":
/*!***************************************!*\
  !*** ./functions/get-all-contacts.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAllContacts": () => (/* binding */ getAllContacts)
/* harmony export */ });
const getAllContacts = function () {
  const allContacts = window.Store.Contact.map((contact) =>
    WAPI._serializeContactObj(contact)
  );

  return allContacts.filter((result) => {
    return result.isUser === true;
  });
};


/***/ }),

/***/ "./functions/get-all-group-metadata.js":
/*!*********************************************!*\
  !*** ./functions/get-all-group-metadata.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAllGroupMetadata": () => (/* binding */ getAllGroupMetadata)
/* harmony export */ });
function getAllGroupMetadata(done) {
  const groupData = window.Store.GroupMetadata.map(
    (groupData) => groupData.attributes
  );

  if (done !== undefined) done(groupData);
  return groupData;
}


/***/ }),

/***/ "./functions/get-all-groups.js":
/*!*************************************!*\
  !*** ./functions/get-all-groups.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAllGroups": () => (/* binding */ getAllGroups)
/* harmony export */ });
function getAllGroups(done) {
  const groups = window.Store.Chat.filter((chat) => chat.isGroup);

  if (done !== undefined) done(groups);
  return groups;
}


/***/ }),

/***/ "./functions/get-all-messages-in-chat.js":
/*!***********************************************!*\
  !*** ./functions/get-all-messages-in-chat.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAllMessagesInChat": () => (/* binding */ getAllMessagesInChat)
/* harmony export */ });
async function getAllMessagesInChat(
  id,
  includeMe = true,
  includeNotifications = true,
  done
) {
  const chat = typeof id === 'string' ? await WAPI.getChat(id) : false;
  if (
    chat &&
    typeof includeMe === 'boolean' &&
    typeof includeNotifications === 'boolean'
  ) {
    let output = [];
    const messages = chat.msgs._models;

    for (const i in messages) {
      if (i === 'remove') {
        continue;
      }
      const messageObj = messages[i];

      let message = await WAPI.processMessageObj(
        messageObj,
        includeMe,
        includeNotifications
      );
      if (message) output.push(message);
    }
    if (done !== undefined) done(output);
    return output;
  } else {
    return await WAPI.sendExist(id);
  }
}


/***/ }),

/***/ "./functions/get-battery-level.js":
/*!****************************************!*\
  !*** ./functions/get-battery-level.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBatteryLevel": () => (/* binding */ getBatteryLevel)
/* harmony export */ });
function getBatteryLevel() {
  return Store.Me && Store.Me.battery ? Store.Me.battery : undefined;
}


/***/ }),

/***/ "./functions/get-chat-by-id.js":
/*!*************************************!*\
  !*** ./functions/get-chat-by-id.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getChatById": () => (/* binding */ getChatById)
/* harmony export */ });
function getChatById(id) {
  try {
    if (id) {
      let found = WAPI.getChat(id);
      if (found) {
        return WAPI._serializeChatObj(found);
      }
    }
    throw false;
  } catch {
    return false;
  }
}


/***/ }),

/***/ "./functions/get-chat-by-name.js":
/*!***************************************!*\
  !*** ./functions/get-chat-by-name.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getChatByName": () => (/* binding */ getChatByName)
/* harmony export */ });
function getChatByName(name, done) {
  const found = window.Store.Chat.find((chat) => chat.name === name);
  if (done !== undefined) done(found);
  return found;
}


/***/ }),

/***/ "./functions/get-chat.js":
/*!*******************************!*\
  !*** ./functions/get-chat.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getChat": () => (/* binding */ getChat)
/* harmony export */ });
function getChat(id) {
  if (!id) {
    return false;
  }
  id = typeof id == 'string' ? id : id._serialized;
  let found = Store.Chat.get(id);
  if (!found) {
    if (Store.CheckWid.validateWid(id)) {
      const ConstructChat = new window.Store.UserConstructor(id, {
        intentionallyUsePrivateConstructor: !0
      });
      found = Store.Chat.find(ConstructChat) || false;
    }
  }
  if (found) {
    found.sendMessage = found.sendMessage
      ? found.sendMessage
      : function () {
          return window.Store.sendMessage.apply(this, arguments);
        };
  }
  return found;
}


/***/ }),

/***/ "./functions/get-common-groups.js":
/*!****************************************!*\
  !*** ./functions/get-common-groups.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCommonGroups": () => (/* binding */ getCommonGroups)
/* harmony export */ });
async function getCommonGroups(participantId, done) {
  let output = [];
  let groups = window.WAPI.getAllGroups();
  for (let idx in groups) {
    try {
      let participants = await window.WAPI.getGroupParticipant(groups[idx].id);
      if (
        participants.filter((participant) => participant == participantId)
          .length
      ) {
        output.push(groups[idx]);
      }
    } catch (err) {
      console.log('Error in group:');
      console.log(groups[idx]);
      console.log(err);
    }
  }

  if (done !== undefined) {
    done(output);
  }
  return output;
}


/***/ }),

/***/ "./functions/get-contact.js":
/*!**********************************!*\
  !*** ./functions/get-contact.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getContact": () => (/* binding */ getContact)
/* harmony export */ });
const getContact = function (id, done) {
  const found = window.Store.Contact.get(id);

  if (done !== undefined) done(window.WAPI._serializeContactObj(found));
  return window.WAPI._serializeContactObj(found);
};


/***/ }),

/***/ "./functions/get-data-messages.js":
/*!****************************************!*\
  !*** ./functions/get-data-messages.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAllMessagesDate": () => (/* binding */ getAllMessagesDate)
/* harmony export */ });
/**
 * Return messages by dates!
 * @param {string} id contact number id
 * @param {string} type 
  types:
  lowerThan: Return all messages before the date informed; 
  higherThan: Return all messages after the date informed;
  equal: Return all messages from the informed date;
  full: Return all messages, with two new stringdate parameters, dateNumeric;
 * @param {string} dateStart Pass the example date 00/00/0000 or 00-00-0000
 * @param {string} time Pass the example time 00:00 24 hours
 */
async function getAllMessagesDate(
  id,
  type = 'full',
  dateStart = undefined,
  time = undefined,
  limit = 10,
  output = [],
  idCheck = [],
  stop = true
) {
  const types = ['higherThan', 'equal', 'lowerThan', 'full'];
  if (!types.includes(type)) {
    return WAPI.scope(
      undefined,
      true,
      null,
      `wrong type! use the types: ${types.join()}`
    );
  }

  if (!!time && dateStart === undefined) {
    return WAPI.scope(
      undefined,
      true,
      null,
      `it is necessary to inform the date field`
    );
  }

  const chat = await WAPI.sendExist(id);
  if (chat && chat.status != 404) {
    const statusMsg = chat.msgs.msgLoadState.noEarlierMsgs;
    if (statusMsg === false) {
      await chat.onEmptyMRM();
    }

    let messages = chat.msgs._models;
    let dateStartTimeStamp, msg;

    if (time !== undefined && dateStart !== undefined) {
      const splitTimeStart =
        typeof time === 'string' ? time.split(/[:]/) : undefined;
      const splitDateStart =
        typeof dateStart === 'string' ? dateStart.split(/[-,/]/) : undefined;
      dateStartTimeStamp = timeStampConvert(splitDateStart, splitTimeStart)
        ? timeStampConvert(splitDateStart, splitTimeStart)
        : false;
      if (dateStartTimeStamp === false || isNaN(dateStartTimeStamp)) {
        const date = new Date();
        const year = date.toLocaleString('en-US', { year: 'numeric' });
        return WAPI.scope(
          undefined,
          true,
          null,
          `Date and time with invalid format! use as an example: data: 01/01/${year} or 01-01-${year} Tima 01:01`
        );
      }
    } else {
      if (dateStart !== undefined) {
        const splitDateStart =
          typeof dateStart === 'string' ? dateStart.split(/[-,/]/) : undefined;
        dateStartTimeStamp = timeStampConvert(splitDateStart)
          ? timeStampConvert(splitDateStart)
          : false;
        if (dateStartTimeStamp === false || isNaN(dateStartTimeStamp)) {
          const date = new Date();
          const year = date.toLocaleString('en-US', { year: 'numeric' });
          return WAPI.scope(
            undefined,
            true,
            null,
            `Date with invalid format! use as an example: 01/01/${year} or 01-01-${year}`
          );
        }
      }
    }
    messages = messages.reverse();
    for (const i in messages) {
      if (i === 'remove') {
        continue;
      }
      if (output.length < limit || limit === 0) {
        const messageObj = messages[i];
        const message = await WAPI._serializeMessageObj(messageObj);
        if (message.id && idCheck.includes(message.id) === true) {
          continue;
        }

        if (type === 'higherThan') {
          if (
            parseInt(dateStartTimeStamp.getTime() / 1000) <= message.timestamp
          ) {
            msg = getMenssage(message);
          }
        }

        if (type === 'equal') {
          if (
            parseInt(dateStartTimeStamp.getTime() / 1000) === message.timestamp
          ) {
            msg = getMenssage(message);
          }
        }

        if (type === 'lowerThan') {
          if (
            parseInt(dateStartTimeStamp.getTime() / 1000) >= message.timestamp
          ) {
            msg = getMenssage(message);
          }
        }

        if (type === 'full') {
          msg = getMenssage(message);
        }

        if (msg && idCheck.includes(msg.id) === false) {
          stop = false;
          idCheck.push(msg.id);
          output.push(msg);
        }
      }
    }

    if (statusMsg === false && stop === false && output.length < limit) {
      return await getAllMessagesDate(
        id,
        type,
        dateStart,
        time,
        limit,
        output,
        idCheck,
        true
      );
    } else {
      return output;
    }
  } else {
    return chat;
  }
}

function timeStampConvert(date, time) {
  var newdate = undefined;
  if (date !== undefined) {
    if (time !== undefined) {
      newdate = new Date(date[2], date[1] - 1, date[0], time[0], time[1]);
    } else {
      newdate = new Date(date[2], date[1] - 1, date[0]);
    }
    return newdate;
  } else {
    return false;
  }
}

function getMenssage(message) {
  const date = new Date(message.timestamp * 1000);
  const stringdate = date.toLocaleString();

  const day = '0' + date.toLocaleString('en-US', { day: 'numeric' });
  const month = '0' + date.toLocaleString('en-US', { month: 'numeric' });
  const minutes = '0' + date.getUTCMinutes();
  const seconds = '0' + date.getSeconds();
  const hours = '0' + date.getHours();

  const _d = {
    id: message.id,
    timestamp: date.getTime(),
    stringdate,
    dateNumeric: {
      day: day.substr(-2),
      month: month.substr(-2),
      year: date.toLocaleString('en-US', { year: 'numeric' }),
      hours: hours.substr(-2),
      minutes: minutes.substr(-2),
      seconds: seconds.substr(-2)
    },
    type: message.type,
    fromMe: message.fromMe
  };
  return Object.assign(message, _d);
}


/***/ }),

/***/ "./functions/get-group-admins.js":
/*!***************************************!*\
  !*** ./functions/get-group-admins.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getGroupAdmins": () => (/* binding */ getGroupAdmins)
/* harmony export */ });
async function getGroupAdmins(groupId) {
  if (typeof groupId !== 'string') {
    return WAPI.scope(undefined, true, null, 'Use to groupId string');
  }
  const chat = await WAPI.sendExist(groupId);

  if (chat && chat.status != 404 && chat.id) {
    const moduleGroup = await window.Store.GroupMetadata.default.models.filter(
      (e) => e.id._serialized === groupId
    );

    const participants =
      moduleGroup.length && moduleGroup[0].participants
        ? moduleGroup[0].participants
        : undefined;

    if (participants) {
      const output = participants
        .filter((participant) => participant.isAdmin)
        .map((participant) => {
          return {
            id: participant.id ? participant.id : null,
            displayName:
              participant.contact && participant.contact.displayName
                ? participant.contact.displayName
                : null,
            mentionName:
              participant.contact && participant.contact.mentionName
                ? participant.contact.mentionName
                : null,
            notifyName:
              participant.contact && participant.contact.notifyName
                ? participant.contact.notifyName
                : null,
            isBusiness:
              participant.contact && participant.contact.isBusiness
                ? participant.contact.isBusiness
                : null,
            pushname:
              participant.contact && participant.contact.pushname
                ? participant.contact.pushname
                : null,
            isUser:
              participant.contact && participant.contact.isUser
                ? participant.contact.isUser
                : null,
            isMyContact:
              participant.contact && participant.contact.isMyContact
                ? participant.contact.isMyContact
                : null,
            isMe:
              participant.contact && participant.contact.isMe
                ? participant.contact.isMe
                : null
          };
        });
      return output;
    }
    return WAPI.scope(undefined, true, null, 'Error find Group');
  }
  return WAPI.scope(undefined, true, null, 'Group not found');
}


/***/ }),

/***/ "./functions/get-group-info-from-invite-link.js":
/*!******************************************************!*\
  !*** ./functions/get-group-info-from-invite-link.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getGroupInfoFromInviteLink": () => (/* binding */ getGroupInfoFromInviteLink)
/* harmony export */ });
async function getGroupInfoFromInviteLink(inviteCode) {
  var groupInfo = await Store.infoGroup.queryGroupInviteInfo(inviteCode);
  return groupInfo;
}


/***/ }),

/***/ "./functions/get-group-invite-link.js":
/*!********************************************!*\
  !*** ./functions/get-group-invite-link.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getGroupInviteLink": () => (/* binding */ getGroupInviteLink)
/* harmony export */ });
async function getGroupInviteLink(chatId) {
  var chat = Store.Chat.get(chatId);
  if (!chat.isGroup) return '';
  const code = await Store.GroupInvite.sendQueryGroupInviteCode(chat.id);
  return `https://chat.whatsapp.com/${code}`;
}


/***/ }),

/***/ "./functions/get-group-participant.js":
/*!********************************************!*\
  !*** ./functions/get-group-participant.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getGroupParticipant": () => (/* binding */ getGroupParticipant)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper */ "./helper/index.js");


async function getGroupParticipant(groupId, time = 1000) {
  if (typeof groupId !== 'string') {
    return WAPI.scope(undefined, true, null, 'Use to groupId string');
  }

  const chat = await WAPI.sendExist(groupId);

  if (chat && chat.status != 404 && chat.id) {
    await window.Store.Cmd.openChatBottom(chat);
    await (0,_helper__WEBPACK_IMPORTED_MODULE_0__.sleep)(time);
    const moduleGroup = await window.Store.GroupMetadata._models.filter(
      (e) => e.id._serialized === groupId
    );

    const participants =
      moduleGroup.length && moduleGroup[0].participants
        ? moduleGroup[0].participants
        : undefined;

    if (participants) {
      const output = participants.map((participant) => {
        return {
          id: participant.id,
          displayName:
            participant.contact && participant.contact.displayName
              ? participant.contact.displayName
              : null,
          mentionName:
            participant.contact && participant.contact.mentionName
              ? participant.contact.mentionName
              : null,
          notifyName:
            participant.contact && participant.contact.notifyName
              ? participant.contact.notifyName
              : null,
          isBusiness:
            participant.contact && participant.contact.isBusiness
              ? participant.contact.isBusiness
              : null,
          pushname:
            participant.contact && participant.contact.pushname
              ? participant.contact.pushname
              : null,
          isUser:
            participant.contact && participant.contact.isUser
              ? participant.contact.isUser
              : null,
          isMyContact:
            participant.contact && participant.contact.isMyContact
              ? participant.contact.isMyContact
              : null,
          isMe:
            participant.contact && participant.contact.isMe
              ? participant.contact.isMe
              : null
        };
      });

      return output;
    }
    return WAPI.scope(undefined, true, null, 'Error find Group');
  }
  return WAPI.scope(undefined, true, null, 'Group not found');
}


/***/ }),

/***/ "./functions/get-host.js":
/*!*******************************!*\
  !*** ./functions/get-host.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getHost": () => (/* binding */ getHost)
/* harmony export */ });
async function getHost() {
  const fromwWid = await Store.MaybeMeUser.getMaybeMeUser();
  if (fromwWid) {
    const idUser = await WAPI.sendExist(fromwWid._serialized);
    if (idUser && idUser.status !== 404) {
      //const infoUser = new Store.ProfileBusiness.BusinessProfile(idUser);
      const infoUser = await Store.Contacts.ContactCollection.get(
        fromwWid._serialized
      );
      //  const infoUser = await Store.MyStatus.getStatus(idUser.id);
      if (infoUser) {
        return await WAPI._serializeMeObj(infoUser);
      }
    }
  }
}


/***/ }),

/***/ "./functions/get-list-mute.js":
/*!************************************!*\
  !*** ./functions/get-list-mute.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getListMute": () => (/* binding */ getListMute),
/* harmony export */   "interfaceMute": () => (/* binding */ interfaceMute)
/* harmony export */ });
async function getListMute(type = 'all') {
  var muteList = (await window.Store.Mute)._models,
    noMute = new Array(),
    toMute = new Array();
  for (var i in muteList)
    muteList[i].__x_isMuted
      ? toMute.push(WAPI.interfaceMute(muteList[i]))
      : noMute.push(WAPI.interfaceMute(muteList[i]));
  var r = null;
  console.log(0, type);
  switch (type) {
    case 'all':
      r = [
        {
          total: toMute.length + noMute.length,
          amountToMute: toMute.length,
          amountnoMute: noMute.length
        },
        toMute,
        noMute
      ];
      break;
    case 'toMute':
      r = [{ total: toMute.length }, toMute];
      break;
    case 'noMute':
      r = [{ total: noMute.length }, noMute];
      break;
  }
  return r;
}
function interfaceMute(arr) {
  let { attributes, expiration, id, isMuted, isState, promises, stale } = arr;
  return { attributes, expiration, id, isMuted, isState, promises, stale };
}


/***/ }),

/***/ "./functions/get-me.js":
/*!*****************************!*\
  !*** ./functions/get-me.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMe": () => (/* binding */ getMe)
/* harmony export */ });
function getMe(done) {
  const rawMe = window.Store.Contact.get(window.Store.Conn.me);

  if (done !== undefined) done(rawMe.all);
  return rawMe.all;
}


/***/ }),

/***/ "./functions/get-message-by-id.js":
/*!****************************************!*\
  !*** ./functions/get-message-by-id.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMessageById": () => (/* binding */ getMessageById)
/* harmony export */ });
async function getMessageById(key, done, serialize = true) {
  // Check message is loaded in store
  let msg = window.Store.Msg.get(key);
  let erro = { erro: true };

  if (!msg) {
    // Get chat of message
    const chat = window.Store.Chat.get(key.remote);
    if (!chat) {
      return erro;
    }

    //If not message not found, load latest messages of chat
    await chat.onEmptyMRM();
    await WAPI.sleep(100);
    msg = window.Store.Msg.get(key);

    if (!msg) {
      // If not found, load messages around the message ID
      const context = chat.getSearchContext(key);
      if (
        context &&
        context.collection &&
        context.collection.loadAroundPromise
      ) {
        await context.collection.loadAroundPromise;
      }
      msg = window.Store.Msg.get(key);
    }
  }

  if (!msg) {
    return erro;
  }

  let result = erro;

  if (serialize) {
    try {
      result = await WAPI.processMessageObj(msg, true, true);
    } catch (err) {}
  } else {
    result = msg;
  }

  if (typeof done === 'function') {
    done(result);
  } else {
    return result;
  }
}


/***/ }),

/***/ "./functions/get-my-contacts.js":
/*!**************************************!*\
  !*** ./functions/get-my-contacts.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMyContacts": () => (/* binding */ getMyContacts)
/* harmony export */ });
const getMyContacts = function (done) {
  const contacts = window.Store.Contact.filter(
    (contact) => contact.isMyContact === true
  ).map((contact) => WAPI._serializeContactObj(contact));
  if (done !== undefined) done(contacts);
  return contacts;
};


/***/ }),

/***/ "./functions/get-new-id.js":
/*!*********************************!*\
  !*** ./functions/get-new-id.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getNewId": () => (/* binding */ getNewId)
/* harmony export */ });
function getNewId() {
  var text = '';
  var possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < 16; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}


/***/ }),

/***/ "./functions/get-new-message-id.js":
/*!*****************************************!*\
  !*** ./functions/get-new-message-id.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getNewMessageId": () => (/* binding */ getNewMessageId)
/* harmony export */ });
async function getNewMessageId(chatId, checkNumber = true) {
  const chat = checkNumber
    ? await WAPI.sendExist(chatId)
    : await WAPI.returnChat(chatId);
  if (chat.id) {
    const newMsgId = new Object();
    newMsgId.fromMe = true;
    newMsgId.id = await WAPI.getNewId().toUpperCase();
    newMsgId.remote = new Store.WidFactory.createWid(chat.id._serialized);
    newMsgId._serialized = `${newMsgId.fromMe}_${newMsgId.remote}_${newMsgId.id}`;
    const Msgkey = new Store.MsgKey(newMsgId);
    return Msgkey;
  } else {
    return false;
  }
}


/***/ }),

/***/ "./functions/get-number-profile.js":
/*!*****************************************!*\
  !*** ./functions/get-number-profile.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getNumberProfile": () => (/* binding */ getNumberProfile)
/* harmony export */ });
async function getNumberProfile(id) {
  if (typeof id != 'string' || id.length === 0) {
    return WAPI.scope(id, true, 404, 'It is necessary to number');
  }
  const chat = await WAPI.sendExist(id);
  if (chat && chat.status != 404 && chat.id) {
    const infoUser = await Store.MyStatus.getStatus(chat);
    return await WAPI._serializeMeObj(infoUser);
  }
  if (!chat.erro) {
    chat.erro = true;
  }
  return chat;
}


/***/ }),

/***/ "./functions/get-profile-pic-from-server.js":
/*!**************************************************!*\
  !*** ./functions/get-profile-pic-from-server.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getProfilePicFromServer": () => (/* binding */ getProfilePicFromServer)
/* harmony export */ });
async function getProfilePicFromServer(id) {
  const pinc = await Store.WapQuery.profilePicFind(id).then((x) => x.eurl);
  return pinc;
}


/***/ }),

/***/ "./functions/get-session-token.js":
/*!****************************************!*\
  !*** ./functions/get-session-token.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSessionTokenBrowser": () => (/* binding */ getSessionTokenBrowser)
/* harmony export */ });
async function getSessionTokenBrowser() {
  if (window.localStorage) {
    var localStorages = await JSON.parse(JSON.stringify(window.localStorage));
    let { WABrowserId, WASecretBundle, WAToken1, WAToken2 } = localStorages;
    return {
      WABrowserId,
      WASecretBundle,
      WAToken1,
      WAToken2
    };
  }
}


/***/ }),

/***/ "./functions/get-state-connection.js":
/*!*******************************************!*\
  !*** ./functions/get-state-connection.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStateConnection": () => (/* binding */ getStateConnection)
/* harmony export */ });
/**
 * Returns state connection
 * @returns obj
 */
function getStateConnection() {
  return window.Store.State.Socket.state;
}


/***/ }),

/***/ "./functions/get-status.js":
/*!*********************************!*\
  !*** ./functions/get-status.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStatus": () => (/* binding */ getStatus)
/* harmony export */ });
async function getStatus(id) {
  return await Store.MyStatus.getStatus(id);
}


/***/ }),

/***/ "./functions/get-unread-messages.js":
/*!******************************************!*\
  !*** ./functions/get-unread-messages.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getUnreadMessages": () => (/* binding */ getUnreadMessages)
/* harmony export */ });
async function getUnreadMessages(undread = true) {
  const arr = [];
  let chats;

  if (undread) {
    chats = await Store.Chat.filter((e) => e.unreadCount > 0);
  } else {
    chats = await Store.Chat.filter((e) => e.unreadCount <= 0);
  }

  for (const chat of chats) {
    const t = chat.msgs._models.slice(-chat.unreadCount);
    for (const messageObj of t) {
      const message = await WAPI.processMessageObj(messageObj, true, true);
      if (message) {
        arr.push(message);
      }
    }
  }

  return arr;
}


/***/ }),

/***/ "./functions/index.js":
/*!****************************!*\
  !*** ./functions/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addChatWapi": () => (/* reexport safe */ _add_chat_wapi__WEBPACK_IMPORTED_MODULE_104__.addChatWapi),
/* harmony export */   "addParticipant": () => (/* reexport safe */ _add_participant__WEBPACK_IMPORTED_MODULE_67__.addParticipant),
/* harmony export */   "archiveChat": () => (/* reexport safe */ _archive_chat__WEBPACK_IMPORTED_MODULE_92__.archiveChat),
/* harmony export */   "areAllMessagesLoaded": () => (/* reexport safe */ _are_all_messages_loaded__WEBPACK_IMPORTED_MODULE_0__.areAllMessagesLoaded),
/* harmony export */   "asyncLoadAllEarlierMessages": () => (/* reexport safe */ _load_all_earlier_chat_messages__WEBPACK_IMPORTED_MODULE_35__.asyncLoadAllEarlierMessages),
/* harmony export */   "baseSendMessage": () => (/* reexport safe */ _send_message_scope__WEBPACK_IMPORTED_MODULE_109__.baseSendMessage),
/* harmony export */   "blockContact": () => (/* reexport safe */ _block_contact__WEBPACK_IMPORTED_MODULE_64__.blockContact),
/* harmony export */   "checkIdMessage": () => (/* reexport safe */ _check_id_messagem__WEBPACK_IMPORTED_MODULE_87__.checkIdMessage),
/* harmony export */   "checkNumberStatus": () => (/* reexport safe */ _check_number_status__WEBPACK_IMPORTED_MODULE_99__.checkNumberStatus),
/* harmony export */   "clearChatMessages": () => (/* reexport safe */ _clear_chat__WEBPACK_IMPORTED_MODULE_1__.clearChatMessages),
/* harmony export */   "clearPresence": () => (/* reexport safe */ _simulate_status_chat__WEBPACK_IMPORTED_MODULE_62__.clearPresence),
/* harmony export */   "createCommunity": () => (/* reexport safe */ _create_community__WEBPACK_IMPORTED_MODULE_107__.createCommunity),
/* harmony export */   "createGroup": () => (/* reexport safe */ _create_group__WEBPACK_IMPORTED_MODULE_2__.createGroup),
/* harmony export */   "deleteConversation": () => (/* reexport safe */ _delete_conversation__WEBPACK_IMPORTED_MODULE_3__.deleteConversation),
/* harmony export */   "deleteMessages": () => (/* reexport safe */ _delete_messages__WEBPACK_IMPORTED_MODULE_4__.deleteMessages),
/* harmony export */   "demoteParticipant": () => (/* reexport safe */ _demote_participant__WEBPACK_IMPORTED_MODULE_69__.demoteParticipant),
/* harmony export */   "downloadFile": () => (/* reexport safe */ _download_file_with_credentials__WEBPACK_IMPORTED_MODULE_5__.downloadFile),
/* harmony export */   "downloadMedia": () => (/* reexport safe */ _download_media__WEBPACK_IMPORTED_MODULE_86__.downloadMedia),
/* harmony export */   "encryptAndUploadFile": () => (/* reexport safe */ _encrypt_and_upload_file__WEBPACK_IMPORTED_MODULE_6__.encryptAndUploadFile),
/* harmony export */   "forwardMessages": () => (/* reexport safe */ _forward_messages__WEBPACK_IMPORTED_MODULE_58__.forwardMessages),
/* harmony export */   "getAllChatIds": () => (/* reexport safe */ _get_all_chats_ids__WEBPACK_IMPORTED_MODULE_8__.getAllChatIds),
/* harmony export */   "getAllChats": () => (/* reexport safe */ _get_all_chats__WEBPACK_IMPORTED_MODULE_7__.getAllChats),
/* harmony export */   "getAllChatsWithMessages": () => (/* reexport safe */ _get_all_chats_with_messages__WEBPACK_IMPORTED_MODULE_9__.getAllChatsWithMessages),
/* harmony export */   "getAllContacts": () => (/* reexport safe */ _get_all_contacts__WEBPACK_IMPORTED_MODULE_10__.getAllContacts),
/* harmony export */   "getAllGroupMetadata": () => (/* reexport safe */ _get_all_group_metadata__WEBPACK_IMPORTED_MODULE_11__.getAllGroupMetadata),
/* harmony export */   "getAllGroups": () => (/* reexport safe */ _get_all_groups__WEBPACK_IMPORTED_MODULE_12__.getAllGroups),
/* harmony export */   "getAllMessagesDate": () => (/* reexport safe */ _get_data_messages__WEBPACK_IMPORTED_MODULE_98__.getAllMessagesDate),
/* harmony export */   "getAllMessagesInChat": () => (/* reexport safe */ _get_all_messages_in_chat__WEBPACK_IMPORTED_MODULE_13__.getAllMessagesInChat),
/* harmony export */   "getBatteryLevel": () => (/* reexport safe */ _get_battery_level__WEBPACK_IMPORTED_MODULE_14__.getBatteryLevel),
/* harmony export */   "getBlockList": () => (/* reexport safe */ _block_list__WEBPACK_IMPORTED_MODULE_74__.getBlockList),
/* harmony export */   "getChat": () => (/* reexport safe */ _get_chat__WEBPACK_IMPORTED_MODULE_15__.getChat),
/* harmony export */   "getChatById": () => (/* reexport safe */ _get_chat_by_id__WEBPACK_IMPORTED_MODULE_16__.getChatById),
/* harmony export */   "getChatByName": () => (/* reexport safe */ _get_chat_by_name__WEBPACK_IMPORTED_MODULE_17__.getChatByName),
/* harmony export */   "getCommonGroups": () => (/* reexport safe */ _get_common_groups__WEBPACK_IMPORTED_MODULE_18__.getCommonGroups),
/* harmony export */   "getContact": () => (/* reexport safe */ _get_contact__WEBPACK_IMPORTED_MODULE_19__.getContact),
/* harmony export */   "getGroupAdmins": () => (/* reexport safe */ _get_group_admins__WEBPACK_IMPORTED_MODULE_20__.getGroupAdmins),
/* harmony export */   "getGroupInfoFromInviteLink": () => (/* reexport safe */ _get_group_info_from_invite_link__WEBPACK_IMPORTED_MODULE_22__.getGroupInfoFromInviteLink),
/* harmony export */   "getGroupInviteLink": () => (/* reexport safe */ _get_group_invite_link__WEBPACK_IMPORTED_MODULE_21__.getGroupInviteLink),
/* harmony export */   "getGroupParticipant": () => (/* reexport safe */ _get_group_participant__WEBPACK_IMPORTED_MODULE_23__.getGroupParticipant),
/* harmony export */   "getHost": () => (/* reexport safe */ _get_host__WEBPACK_IMPORTED_MODULE_24__.getHost),
/* harmony export */   "getListMute": () => (/* reexport safe */ _get_list_mute__WEBPACK_IMPORTED_MODULE_85__.getListMute),
/* harmony export */   "getMe": () => (/* reexport safe */ _get_me__WEBPACK_IMPORTED_MODULE_25__.getMe),
/* harmony export */   "getMessageById": () => (/* reexport safe */ _get_message_by_id__WEBPACK_IMPORTED_MODULE_63__.getMessageById),
/* harmony export */   "getMyContacts": () => (/* reexport safe */ _get_my_contacts__WEBPACK_IMPORTED_MODULE_26__.getMyContacts),
/* harmony export */   "getNewId": () => (/* reexport safe */ _get_new_id__WEBPACK_IMPORTED_MODULE_27__.getNewId),
/* harmony export */   "getNewMessageId": () => (/* reexport safe */ _get_new_message_id__WEBPACK_IMPORTED_MODULE_60__.getNewMessageId),
/* harmony export */   "getNumberProfile": () => (/* reexport safe */ _get_number_profile__WEBPACK_IMPORTED_MODULE_28__.getNumberProfile),
/* harmony export */   "getProfilePicFromServer": () => (/* reexport safe */ _get_profile_pic_from_server__WEBPACK_IMPORTED_MODULE_29__.getProfilePicFromServer),
/* harmony export */   "getSessionTokenBrowser": () => (/* reexport safe */ _get_session_token__WEBPACK_IMPORTED_MODULE_83__.getSessionTokenBrowser),
/* harmony export */   "getStateConnection": () => (/* reexport safe */ _get_state_connection__WEBPACK_IMPORTED_MODULE_101__.getStateConnection),
/* harmony export */   "getStatus": () => (/* reexport safe */ _get_status__WEBPACK_IMPORTED_MODULE_30__.getStatus),
/* harmony export */   "getTheme": () => (/* reexport safe */ _theme__WEBPACK_IMPORTED_MODULE_75__.getTheme),
/* harmony export */   "getUnreadMessages": () => (/* reexport safe */ _get_unread_messages__WEBPACK_IMPORTED_MODULE_31__.getUnreadMessages),
/* harmony export */   "getchatId": () => (/* reexport safe */ _check_send_exist__WEBPACK_IMPORTED_MODULE_79__.getchatId),
/* harmony export */   "interfaceMute": () => (/* reexport safe */ _get_list_mute__WEBPACK_IMPORTED_MODULE_85__.interfaceMute),
/* harmony export */   "isBeta": () => (/* reexport safe */ _check_beta__WEBPACK_IMPORTED_MODULE_102__.isBeta),
/* harmony export */   "isConnected": () => (/* reexport safe */ _is_connected__WEBPACK_IMPORTED_MODULE_32__.isConnected),
/* harmony export */   "isLoggedIn": () => (/* reexport safe */ _is_logged_in__WEBPACK_IMPORTED_MODULE_33__.isLoggedIn),
/* harmony export */   "joinGroup": () => (/* reexport safe */ _join_group__WEBPACK_IMPORTED_MODULE_71__.joinGroup),
/* harmony export */   "killServiceWorker": () => (/* reexport safe */ _kill_service_worker__WEBPACK_IMPORTED_MODULE_77__.killServiceWorker),
/* harmony export */   "leaveGroup": () => (/* reexport safe */ _leave_group__WEBPACK_IMPORTED_MODULE_34__.leaveGroup),
/* harmony export */   "loadAllEarlierMessages": () => (/* reexport safe */ _load_all_earlier_chat_messages__WEBPACK_IMPORTED_MODULE_35__.loadAllEarlierMessages),
/* harmony export */   "loadAndGetAllMessagesInChat": () => (/* reexport safe */ _load_and_get_all_messages_in_chat__WEBPACK_IMPORTED_MODULE_36__.loadAndGetAllMessagesInChat),
/* harmony export */   "loadChatEarlierMessages": () => (/* reexport safe */ _load_earlier_chat_messages__WEBPACK_IMPORTED_MODULE_37__.loadChatEarlierMessages),
/* harmony export */   "loadEarlierMessagesTillDate": () => (/* reexport safe */ _load_earlier_messages_til_date__WEBPACK_IMPORTED_MODULE_38__.loadEarlierMessagesTillDate),
/* harmony export */   "logout": () => (/* reexport safe */ _logout__WEBPACK_IMPORTED_MODULE_89__.logout),
/* harmony export */   "markMarkSeenMessage": () => (/* reexport safe */ _mark_markSeen_message__WEBPACK_IMPORTED_MODULE_73__.markMarkSeenMessage),
/* harmony export */   "markPaused": () => (/* reexport safe */ _simulate_status_chat__WEBPACK_IMPORTED_MODULE_62__.markPaused),
/* harmony export */   "markUnseenMessage": () => (/* reexport safe */ _mark_unseen_message__WEBPACK_IMPORTED_MODULE_72__.markUnseenMessage),
/* harmony export */   "onlySendAdmin": () => (/* reexport safe */ _only_send_admin__WEBPACK_IMPORTED_MODULE_106__.onlySendAdmin),
/* harmony export */   "openChat": () => (/* reexport safe */ _open_chat__WEBPACK_IMPORTED_MODULE_70__.openChat),
/* harmony export */   "openChatAt": () => (/* reexport safe */ _open_chat__WEBPACK_IMPORTED_MODULE_70__.openChatAt),
/* harmony export */   "pinChat": () => (/* reexport safe */ _fix_chat__WEBPACK_IMPORTED_MODULE_82__.pinChat),
/* harmony export */   "pollCreation": () => (/* reexport safe */ _poll_creation__WEBPACK_IMPORTED_MODULE_108__.pollCreation),
/* harmony export */   "presenceAvailable": () => (/* reexport safe */ _simulate_status_chat__WEBPACK_IMPORTED_MODULE_62__.presenceAvailable),
/* harmony export */   "presenceUnavailable": () => (/* reexport safe */ _simulate_status_chat__WEBPACK_IMPORTED_MODULE_62__.presenceUnavailable),
/* harmony export */   "processFiles": () => (/* reexport safe */ _process_files__WEBPACK_IMPORTED_MODULE_39__.processFiles),
/* harmony export */   "processMessageObj": () => (/* reexport safe */ _process_message_object__WEBPACK_IMPORTED_MODULE_40__.processMessageObj),
/* harmony export */   "promoteParticipant": () => (/* reexport safe */ _promote_participant__WEBPACK_IMPORTED_MODULE_68__.promoteParticipant),
/* harmony export */   "removeParticipant": () => (/* reexport safe */ _remove_participant__WEBPACK_IMPORTED_MODULE_66__.removeParticipant),
/* harmony export */   "reply": () => (/* reexport safe */ _reply__WEBPACK_IMPORTED_MODULE_61__.reply),
/* harmony export */   "restartService": () => (/* reexport safe */ _restart_service__WEBPACK_IMPORTED_MODULE_76__.restartService),
/* harmony export */   "returnChat": () => (/* reexport safe */ _check_send_exist__WEBPACK_IMPORTED_MODULE_79__.returnChat),
/* harmony export */   "returnReply": () => (/* reexport safe */ _return_reply__WEBPACK_IMPORTED_MODULE_88__.returnReply),
/* harmony export */   "revokeGroupInviteLink": () => (/* reexport safe */ _revoke_invite_link__WEBPACK_IMPORTED_MODULE_41__.revokeGroupInviteLink),
/* harmony export */   "scope": () => (/* reexport safe */ _check_send_exist__WEBPACK_IMPORTED_MODULE_79__.scope),
/* harmony export */   "sendButtons": () => (/* reexport safe */ _send_buttons__WEBPACK_IMPORTED_MODULE_95__.sendButtons),
/* harmony export */   "sendChatstate": () => (/* reexport safe */ _send_chat_state__WEBPACK_IMPORTED_MODULE_42__.sendChatstate),
/* harmony export */   "sendCheckType": () => (/* reexport safe */ _check_send_exist__WEBPACK_IMPORTED_MODULE_79__.sendCheckType),
/* harmony export */   "sendContactVcard": () => (/* reexport safe */ _send_contact_vcard__WEBPACK_IMPORTED_MODULE_59__.sendContactVcard),
/* harmony export */   "sendContactVcardList": () => (/* reexport safe */ _send_contact_vcard_list__WEBPACK_IMPORTED_MODULE_80__.sendContactVcardList),
/* harmony export */   "sendExist": () => (/* reexport safe */ _check_send_exist__WEBPACK_IMPORTED_MODULE_79__.sendExist),
/* harmony export */   "sendFile": () => (/* reexport safe */ _send_file__WEBPACK_IMPORTED_MODULE_43__.sendFile),
/* harmony export */   "sendImage": () => (/* reexport safe */ _send_image__WEBPACK_IMPORTED_MODULE_44__.sendImage),
/* harmony export */   "sendImageAsSticker": () => (/* reexport safe */ _send_image_as_stricker__WEBPACK_IMPORTED_MODULE_46__.sendImageAsSticker),
/* harmony export */   "sendImageWithProduct": () => (/* reexport safe */ _send_image_with_product__WEBPACK_IMPORTED_MODULE_47__.sendImageWithProduct),
/* harmony export */   "sendLinkPreview": () => (/* reexport safe */ _send_link_preview__WEBPACK_IMPORTED_MODULE_78__.sendLinkPreview),
/* harmony export */   "sendListMenu": () => (/* reexport safe */ _send_list_menu__WEBPACK_IMPORTED_MODULE_100__.sendListMenu),
/* harmony export */   "sendLocation": () => (/* reexport safe */ _send_location__WEBPACK_IMPORTED_MODULE_48__.sendLocation),
/* harmony export */   "sendMessage": () => (/* reexport safe */ _send_message__WEBPACK_IMPORTED_MODULE_49__.sendMessage),
/* harmony export */   "sendMessage2": () => (/* reexport safe */ _send_message2__WEBPACK_IMPORTED_MODULE_53__.sendMessage2),
/* harmony export */   "sendMessageOptions": () => (/* reexport safe */ _sendMessageOptions__WEBPACK_IMPORTED_MODULE_50__.sendMessageOptions),
/* harmony export */   "sendMessageWithTags": () => (/* reexport safe */ _send_message_with_tags__WEBPACK_IMPORTED_MODULE_51__.sendMessageWithTags),
/* harmony export */   "sendMessageWithThumb": () => (/* reexport safe */ _send_message_with_thumb__WEBPACK_IMPORTED_MODULE_52__.sendMessageWithThumb),
/* harmony export */   "sendMute": () => (/* reexport safe */ _send_mute__WEBPACK_IMPORTED_MODULE_84__.sendMute),
/* harmony export */   "sendPtt": () => (/* reexport safe */ _send_ptt__WEBPACK_IMPORTED_MODULE_45__.sendPtt),
/* harmony export */   "sendReactions": () => (/* reexport safe */ _send_reactions__WEBPACK_IMPORTED_MODULE_103__.sendReactions),
/* harmony export */   "sendSticker": () => (/* reexport safe */ _send_sticker__WEBPACK_IMPORTED_MODULE_54__.sendSticker),
/* harmony export */   "sendTypeButtons": () => (/* reexport safe */ _send_type_buttons__WEBPACK_IMPORTED_MODULE_105__.sendTypeButtons),
/* harmony export */   "sendVideoAsGif": () => (/* reexport safe */ _send_video_as_gif__WEBPACK_IMPORTED_MODULE_55__.sendVideoAsGif),
/* harmony export */   "setGroupDescription": () => (/* reexport safe */ _set_group_description__WEBPACK_IMPORTED_MODULE_94__.setGroupDescription),
/* harmony export */   "setGroupImage": () => (/* reexport safe */ _set_group_image__WEBPACK_IMPORTED_MODULE_110__.setGroupImage),
/* harmony export */   "setGroupSettings": () => (/* reexport safe */ _set_group_settings__WEBPACK_IMPORTED_MODULE_97__.setGroupSettings),
/* harmony export */   "setGroupTitle": () => (/* reexport safe */ _set_group_title__WEBPACK_IMPORTED_MODULE_96__.setGroupTitle),
/* harmony export */   "setMyName": () => (/* reexport safe */ _set_my_name__WEBPACK_IMPORTED_MODULE_56__.setMyName),
/* harmony export */   "setMyStatus": () => (/* reexport safe */ _set_my_status__WEBPACK_IMPORTED_MODULE_57__.setMyStatus),
/* harmony export */   "setNewMessageId": () => (/* reexport safe */ _set_new_message__WEBPACK_IMPORTED_MODULE_93__.setNewMessageId),
/* harmony export */   "setPresenceOffline": () => (/* reexport safe */ _set_presence_offline__WEBPACK_IMPORTED_MODULE_91__.setPresenceOffline),
/* harmony export */   "setPresenceOnline": () => (/* reexport safe */ _set_presence_online__WEBPACK_IMPORTED_MODULE_90__.setPresenceOnline),
/* harmony export */   "setProfilePic": () => (/* reexport safe */ _set_profile_pic__WEBPACK_IMPORTED_MODULE_81__.setProfilePic),
/* harmony export */   "setTheme": () => (/* reexport safe */ _theme__WEBPACK_IMPORTED_MODULE_75__.setTheme),
/* harmony export */   "startRecording": () => (/* reexport safe */ _simulate_status_chat__WEBPACK_IMPORTED_MODULE_62__.startRecording),
/* harmony export */   "startTyping": () => (/* reexport safe */ _simulate_status_chat__WEBPACK_IMPORTED_MODULE_62__.startTyping),
/* harmony export */   "unblockContact": () => (/* reexport safe */ _unblock_contact__WEBPACK_IMPORTED_MODULE_65__.unblockContact)
/* harmony export */ });
/* harmony import */ var _are_all_messages_loaded__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./are-all-messages-loaded */ "./functions/are-all-messages-loaded.js");
/* harmony import */ var _clear_chat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clear-chat */ "./functions/clear-chat.js");
/* harmony import */ var _create_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-group */ "./functions/create-group.js");
/* harmony import */ var _delete_conversation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delete-conversation */ "./functions/delete-conversation.js");
/* harmony import */ var _delete_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./delete-messages */ "./functions/delete-messages.js");
/* harmony import */ var _download_file_with_credentials__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./download-file-with-credentials */ "./functions/download-file-with-credentials.js");
/* harmony import */ var _encrypt_and_upload_file__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./encrypt-and-upload-file */ "./functions/encrypt-and-upload-file.js");
/* harmony import */ var _get_all_chats__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./get-all-chats */ "./functions/get-all-chats.js");
/* harmony import */ var _get_all_chats_ids__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./get-all-chats-ids */ "./functions/get-all-chats-ids.js");
/* harmony import */ var _get_all_chats_with_messages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./get-all-chats-with-messages */ "./functions/get-all-chats-with-messages.js");
/* harmony import */ var _get_all_contacts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./get-all-contacts */ "./functions/get-all-contacts.js");
/* harmony import */ var _get_all_group_metadata__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./get-all-group-metadata */ "./functions/get-all-group-metadata.js");
/* harmony import */ var _get_all_groups__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./get-all-groups */ "./functions/get-all-groups.js");
/* harmony import */ var _get_all_messages_in_chat__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./get-all-messages-in-chat */ "./functions/get-all-messages-in-chat.js");
/* harmony import */ var _get_battery_level__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./get-battery-level */ "./functions/get-battery-level.js");
/* harmony import */ var _get_chat__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./get-chat */ "./functions/get-chat.js");
/* harmony import */ var _get_chat_by_id__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./get-chat-by-id */ "./functions/get-chat-by-id.js");
/* harmony import */ var _get_chat_by_name__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./get-chat-by-name */ "./functions/get-chat-by-name.js");
/* harmony import */ var _get_common_groups__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./get-common-groups */ "./functions/get-common-groups.js");
/* harmony import */ var _get_contact__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./get-contact */ "./functions/get-contact.js");
/* harmony import */ var _get_group_admins__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./get-group-admins */ "./functions/get-group-admins.js");
/* harmony import */ var _get_group_invite_link__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./get-group-invite-link */ "./functions/get-group-invite-link.js");
/* harmony import */ var _get_group_info_from_invite_link__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./get-group-info-from-invite-link */ "./functions/get-group-info-from-invite-link.js");
/* harmony import */ var _get_group_participant__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./get-group-participant */ "./functions/get-group-participant.js");
/* harmony import */ var _get_host__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./get-host */ "./functions/get-host.js");
/* harmony import */ var _get_me__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./get-me */ "./functions/get-me.js");
/* harmony import */ var _get_my_contacts__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./get-my-contacts */ "./functions/get-my-contacts.js");
/* harmony import */ var _get_new_id__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./get-new-id */ "./functions/get-new-id.js");
/* harmony import */ var _get_number_profile__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./get-number-profile */ "./functions/get-number-profile.js");
/* harmony import */ var _get_profile_pic_from_server__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./get-profile-pic-from-server */ "./functions/get-profile-pic-from-server.js");
/* harmony import */ var _get_status__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./get-status */ "./functions/get-status.js");
/* harmony import */ var _get_unread_messages__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./get-unread-messages */ "./functions/get-unread-messages.js");
/* harmony import */ var _is_connected__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./is-connected */ "./functions/is-connected.js");
/* harmony import */ var _is_logged_in__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./is-logged-in */ "./functions/is-logged-in.js");
/* harmony import */ var _leave_group__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./leave-group */ "./functions/leave-group.js");
/* harmony import */ var _load_all_earlier_chat_messages__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./load-all-earlier-chat-messages */ "./functions/load-all-earlier-chat-messages.js");
/* harmony import */ var _load_and_get_all_messages_in_chat__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./load-and-get-all-messages-in-chat */ "./functions/load-and-get-all-messages-in-chat.js");
/* harmony import */ var _load_earlier_chat_messages__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./load-earlier-chat-messages */ "./functions/load-earlier-chat-messages.js");
/* harmony import */ var _load_earlier_messages_til_date__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./load-earlier-messages-til-date */ "./functions/load-earlier-messages-til-date.js");
/* harmony import */ var _process_files__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./process-files */ "./functions/process-files.js");
/* harmony import */ var _process_message_object__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./process-message-object */ "./functions/process-message-object.js");
/* harmony import */ var _revoke_invite_link__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./revoke-invite-link */ "./functions/revoke-invite-link.js");
/* harmony import */ var _send_chat_state__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./send-chat-state */ "./functions/send-chat-state.js");
/* harmony import */ var _send_file__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./send-file */ "./functions/send-file.js");
/* harmony import */ var _send_image__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./send-image */ "./functions/send-image.js");
/* harmony import */ var _send_ptt__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./send-ptt */ "./functions/send-ptt.js");
/* harmony import */ var _send_image_as_stricker__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./send-image-as-stricker */ "./functions/send-image-as-stricker.js");
/* harmony import */ var _send_image_with_product__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./send-image-with-product */ "./functions/send-image-with-product.js");
/* harmony import */ var _send_location__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./send-location */ "./functions/send-location.js");
/* harmony import */ var _send_message__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./send-message */ "./functions/send-message.js");
/* harmony import */ var _sendMessageOptions__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./sendMessageOptions */ "./functions/sendMessageOptions.js");
/* harmony import */ var _send_message_with_tags__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./send-message-with-tags */ "./functions/send-message-with-tags.js");
/* harmony import */ var _send_message_with_thumb__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./send-message-with-thumb */ "./functions/send-message-with-thumb.js");
/* harmony import */ var _send_message2__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./send-message2 */ "./functions/send-message2.js");
/* harmony import */ var _send_sticker__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./send-sticker */ "./functions/send-sticker.js");
/* harmony import */ var _send_video_as_gif__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./send-video-as-gif */ "./functions/send-video-as-gif.js");
/* harmony import */ var _set_my_name__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./set-my-name */ "./functions/set-my-name.js");
/* harmony import */ var _set_my_status__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./set-my-status */ "./functions/set-my-status.js");
/* harmony import */ var _forward_messages__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./forward-messages */ "./functions/forward-messages.js");
/* harmony import */ var _send_contact_vcard__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./send-contact-vcard */ "./functions/send-contact-vcard.js");
/* harmony import */ var _get_new_message_id__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./get-new-message-id */ "./functions/get-new-message-id.js");
/* harmony import */ var _reply__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./reply */ "./functions/reply.js");
/* harmony import */ var _simulate_status_chat__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./simulate-status-chat */ "./functions/simulate-status-chat.js");
/* harmony import */ var _get_message_by_id__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./get-message-by-id */ "./functions/get-message-by-id.js");
/* harmony import */ var _block_contact__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./block-contact */ "./functions/block-contact.js");
/* harmony import */ var _unblock_contact__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./unblock-contact */ "./functions/unblock-contact.js");
/* harmony import */ var _remove_participant__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./remove-participant */ "./functions/remove-participant.js");
/* harmony import */ var _add_participant__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./add-participant */ "./functions/add-participant.js");
/* harmony import */ var _promote_participant__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./promote-participant */ "./functions/promote-participant.js");
/* harmony import */ var _demote_participant__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./demote-participant */ "./functions/demote-participant.js");
/* harmony import */ var _open_chat__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./open-chat */ "./functions/open-chat.js");
/* harmony import */ var _join_group__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./join-group */ "./functions/join-group.js");
/* harmony import */ var _mark_unseen_message__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./mark-unseen-message */ "./functions/mark-unseen-message.js");
/* harmony import */ var _mark_markSeen_message__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./mark-markSeen-message */ "./functions/mark-markSeen-message.js");
/* harmony import */ var _block_list__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./block-list */ "./functions/block-list.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./theme */ "./functions/theme.js");
/* harmony import */ var _restart_service__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./restart-service */ "./functions/restart-service.js");
/* harmony import */ var _kill_service_worker__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./kill-service-worker */ "./functions/kill-service-worker.js");
/* harmony import */ var _send_link_preview__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./send-link-preview */ "./functions/send-link-preview.js");
/* harmony import */ var _check_send_exist__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./check-send-exist */ "./functions/check-send-exist.js");
/* harmony import */ var _send_contact_vcard_list__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./send-contact-vcard-list */ "./functions/send-contact-vcard-list.js");
/* harmony import */ var _set_profile_pic__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./set-profile-pic */ "./functions/set-profile-pic.js");
/* harmony import */ var _fix_chat__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./fix-chat */ "./functions/fix-chat.js");
/* harmony import */ var _get_session_token__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./get-session-token */ "./functions/get-session-token.js");
/* harmony import */ var _send_mute__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./send-mute */ "./functions/send-mute.js");
/* harmony import */ var _get_list_mute__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./get-list-mute */ "./functions/get-list-mute.js");
/* harmony import */ var _download_media__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./download-media */ "./functions/download-media.js");
/* harmony import */ var _check_id_messagem__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./check-id-messagem */ "./functions/check-id-messagem.js");
/* harmony import */ var _return_reply__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ./return-reply */ "./functions/return-reply.js");
/* harmony import */ var _logout__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ./logout */ "./functions/logout.js");
/* harmony import */ var _set_presence_online__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ./set-presence-online */ "./functions/set-presence-online.js");
/* harmony import */ var _set_presence_offline__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ./set-presence-offline */ "./functions/set-presence-offline.js");
/* harmony import */ var _archive_chat__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ./archive-chat */ "./functions/archive-chat.js");
/* harmony import */ var _set_new_message__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ./set-new-message */ "./functions/set-new-message.js");
/* harmony import */ var _set_group_description__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ./set-group-description */ "./functions/set-group-description.js");
/* harmony import */ var _send_buttons__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! ./send-buttons */ "./functions/send-buttons.js");
/* harmony import */ var _set_group_title__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! ./set-group-title */ "./functions/set-group-title.js");
/* harmony import */ var _set_group_settings__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! ./set-group-settings */ "./functions/set-group-settings.js");
/* harmony import */ var _get_data_messages__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! ./get-data-messages */ "./functions/get-data-messages.js");
/* harmony import */ var _check_number_status__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! ./check-number-status */ "./functions/check-number-status.js");
/* harmony import */ var _send_list_menu__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! ./send-list-menu */ "./functions/send-list-menu.js");
/* harmony import */ var _get_state_connection__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! ./get-state-connection */ "./functions/get-state-connection.js");
/* harmony import */ var _check_beta__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(/*! ./check-beta */ "./functions/check-beta.js");
/* harmony import */ var _send_reactions__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(/*! ./send-reactions */ "./functions/send-reactions.js");
/* harmony import */ var _add_chat_wapi__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(/*! ./add-chat-wapi */ "./functions/add-chat-wapi.js");
/* harmony import */ var _send_type_buttons__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(/*! ./send-type-buttons */ "./functions/send-type-buttons.js");
/* harmony import */ var _only_send_admin__WEBPACK_IMPORTED_MODULE_106__ = __webpack_require__(/*! ./only-send-admin */ "./functions/only-send-admin.js");
/* harmony import */ var _create_community__WEBPACK_IMPORTED_MODULE_107__ = __webpack_require__(/*! ./create-community */ "./functions/create-community.js");
/* harmony import */ var _poll_creation__WEBPACK_IMPORTED_MODULE_108__ = __webpack_require__(/*! ./poll-creation */ "./functions/poll-creation.js");
/* harmony import */ var _send_message_scope__WEBPACK_IMPORTED_MODULE_109__ = __webpack_require__(/*! ./send-message-scope */ "./functions/send-message-scope.js");
/* harmony import */ var _set_group_image__WEBPACK_IMPORTED_MODULE_110__ = __webpack_require__(/*! ./set-group-image */ "./functions/set-group-image.js");














































































































/////




/***/ }),

/***/ "./functions/is-connected.js":
/*!***********************************!*\
  !*** ./functions/is-connected.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isConnected": () => (/* binding */ isConnected)
/* harmony export */ });
function isConnected(done) {
  // Phone Disconnected icon appears when phone
  const isConnected =
    document.querySelector('[data-testid="alert-phone"]') == null &&
    document.querySelector('[data-testid="alert-computer"]') == null
      ? true
      : false;
  if (done !== undefined) done(isConnected);
  return isConnected;
}


/***/ }),

/***/ "./functions/is-logged-in.js":
/*!***********************************!*\
  !*** ./functions/is-logged-in.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isLoggedIn": () => (/* binding */ isLoggedIn)
/* harmony export */ });
function isLoggedIn(done) {
  // Contact always exists when logged in
  const isLogged =
    window.Store.Contact && window.Store.Contact.checksum !== undefined;

  if (done !== undefined) done(isLogged);
  return isLogged;
}


/***/ }),

/***/ "./functions/join-group.js":
/*!*********************************!*\
  !*** ./functions/join-group.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "joinGroup": () => (/* binding */ joinGroup)
/* harmony export */ });
async function joinGroup(inviteCode) {
  var result = await Store.WapQuery.acceptGroupInvite(inviteCode);
  return result;
}


/***/ }),

/***/ "./functions/kill-service-worker.js":
/*!******************************************!*\
  !*** ./functions/kill-service-worker.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "killServiceWorker": () => (/* binding */ killServiceWorker)
/* harmony export */ });
async function killServiceWorker() {
  await Store.ServiceWorker.default.killServiceWorker();
  return true;
}


/***/ }),

/***/ "./functions/leave-group.js":
/*!**********************************!*\
  !*** ./functions/leave-group.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "leaveGroup": () => (/* binding */ leaveGroup)
/* harmony export */ });
async function leaveGroup(groupId) {
  groupId = typeof groupId == 'string' ? groupId : groupId._serialized;
  var group = WAPI.getChat(groupId);
  return Store.GroupActions.sendExitGroup(group);
}


/***/ }),

/***/ "./functions/load-all-earlier-chat-messages.js":
/*!*****************************************************!*\
  !*** ./functions/load-all-earlier-chat-messages.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "asyncLoadAllEarlierMessages": () => (/* binding */ asyncLoadAllEarlierMessages),
/* harmony export */   "loadAllEarlierMessages": () => (/* binding */ loadAllEarlierMessages)
/* harmony export */ });
async function loadAllEarlierMessages(id, chat) {
  const found = WAPI.getChat(id);
  while (!found.msgs.msgLoadState.noEarlierMsgs) {
    await found.onEmptyMRM();
    await WAPI.sleep(100);
  }
  chat(found);
  return true;
}

/**
 * SYNC version
 * Loads all earlier messages of given chat id
 * @param {string} id Chat id
 * @param {Funciton} done Optional callback
 */
function asyncLoadAllEarlierMessages(id, done) {
  loadAllEarlierMessages(id);
  done();
}


/***/ }),

/***/ "./functions/load-and-get-all-messages-in-chat.js":
/*!********************************************************!*\
  !*** ./functions/load-and-get-all-messages-in-chat.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadAndGetAllMessagesInChat": () => (/* binding */ loadAndGetAllMessagesInChat)
/* harmony export */ });
async function loadAndGetAllMessagesInChat(
  id,
  includeMe,
  includeNotifications
) {
  return new Promise((resolve) => {
    WAPI.loadAllEarlierMessages(id, async (chat) => {
      let output = [];
      const messages = chat.msgs._models;

      for (const i in messages) {
        if (i === 'remove') {
          continue;
        }
        const messageObj = messages[i];
        let message = await WAPI.processMessageObj(
          messageObj,
          includeMe,
          includeNotifications
        );

        if (message) {
          output.push(message);
        }
      }
      resolve(output);
    });
  });
}


/***/ }),

/***/ "./functions/load-earlier-chat-messages.js":
/*!*************************************************!*\
  !*** ./functions/load-earlier-chat-messages.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadChatEarlierMessages": () => (/* binding */ loadChatEarlierMessages)
/* harmony export */ });
async function loadChatEarlierMessages(id) {
  const chat = WAPI.getChat(id);
  if (chat) {
    const someEarlierMessages = await chat.onEmptyMRM();
    if (someEarlierMessages) {
      const serializeMessageObj = await WAPI._serializeMessageObj;
      return someEarlierMessages.map(serializeMessageObj);
    }
  }
  return false;
}


/***/ }),

/***/ "./functions/load-earlier-messages-til-date.js":
/*!*****************************************************!*\
  !*** ./functions/load-earlier-messages-til-date.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadEarlierMessagesTillDate": () => (/* binding */ loadEarlierMessagesTillDate)
/* harmony export */ });
function loadEarlierMessagesTillDate(id, lastMessage, done) {
  const found = WAPI.getChat(id);
  const x = function () {
    if (
      found.msgs.models[0].t > lastMessage &&
      !found.msgs.msgLoadState.noEarlierMsgs
    ) {
      found.onEmptyMRM().then(x);
    } else {
      done();
    }
  };
  x();
}


/***/ }),

/***/ "./functions/logout.js":
/*!*****************************!*\
  !*** ./functions/logout.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "logout": () => (/* binding */ logout)
/* harmony export */ });
async function logout() {
  if (window.Store.Login) {
    await window.Store.Login.startLogout();
    return true;
  } else {
    return false;
  }
}


/***/ }),

/***/ "./functions/mark-markSeen-message.js":
/*!********************************************!*\
  !*** ./functions/mark-markSeen-message.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "markMarkSeenMessage": () => (/* binding */ markMarkSeenMessage)
/* harmony export */ });
/**
 * Mark chat as read ✔️✔️
 * @param {*} id idchat
 * @returns bollean
 */
async function markMarkSeenMessage(id) {
  const chat = await WAPI.sendExist(id);
  if (!chat.erro) {
    //await Store.ReadSeen.markUnread(chat);
    await Store.ReadSeen.sendSeen(chat, false);
    return WAPI.scope(undefined, false, 'OK', null);
  } else {
    return WAPI.scope(undefined, true, 'Error', null);
  }
}


/***/ }),

/***/ "./functions/mark-unseen-message.js":
/*!******************************************!*\
  !*** ./functions/mark-unseen-message.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "markUnseenMessage": () => (/* binding */ markUnseenMessage)
/* harmony export */ });
/**
 * Mark unread chat
 * @param {*} id idchat
 * @returns bollean
 */
async function markUnseenMessage(id) {
  const chat = await WAPI.sendExist(id);
  if (!chat.erro) {
    await Store.ReadSeen.markUnread(chat, true);
    return WAPI.scope(undefined, false, 'OK', null);
  } else {
    return WAPI.scope(undefined, true, 'Error', null);
  }
}


/***/ }),

/***/ "./functions/only-send-admin.js":
/*!**************************************!*\
  !*** ./functions/only-send-admin.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "onlySendAdmin": () => (/* binding */ onlySendAdmin)
/* harmony export */ });
async function onlySendAdmin(chatId, type) {
  if (!chatId.includes('@g.us')) {
    return window.WAPI.scope(chatId, true, 404, 'The number is not a group');
  }

  if (typeof type !== 'boolean') {
    return window.WAPI.scope(chatId, true, 404, 'the type must be boolean');
  }
  const chat = await WAPI.sendExist(chatId);
  if (chat && chat.status != 404 && chat.id) {
    try {
      const onlyAdmin = await Store.onlySendAdmin.setGroupProperty(
        chat.id,
        `announcement`,
        type
      );
      return WAPI.scope(chatId, false, 200, 'successfully changed');
    } catch (e) {
      return WAPI.scope(chatId, true, 404, 'not changed');
    }
  } else {
    if (!chat.erro) {
      chat.erro = true;
    }
    return chat;
  }
}


/***/ }),

/***/ "./functions/open-chat.js":
/*!********************************!*\
  !*** ./functions/open-chat.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "openChat": () => (/* binding */ openChat),
/* harmony export */   "openChatAt": () => (/* binding */ openChatAt)
/* harmony export */ });
/**
 * open chat!
 * @param {string} chatId Chat id
 */
async function openChat(chatId, force = false) {
  if (force) {
    const chat = await WAPI.getChat(chatId);
    const result = await Store.Cmd.openChatBottom(chat);
    return WAPI.scope(undefined, false, result);
  }

  if (typeof chatId != 'string' || chatId.length === 0) {
    return WAPI.scope(chatId, true, 404, 'It is necessary to number');
  }

  const chat = await WAPI.sendExist(chatId);
  if (chat && chat.status != 404 && chat.id) {
    const chat = Store.Chat.get(chatId);
    const result = Store.Cmd.default.openChatBottom(chat);
    return WAPI.scope(undefined, false, result);
  }
  if (!chat.erro) {
    chat.erro = true;
  }
  return chat;
}

/**
 * Opens chat at given message position
 * This is a UI proccess, use this in a queue
 * @param {string} chatId Chat id
 * @param {string} messageId Message id: (For example: '06D3AB3D0EEB9D077A3F9A3EFF4DD030')
 * @returns {{wasVisible: boolean, alignAt: string}}: {wasVisible: false, alignAt: "center"}
 */
async function openChatAt(chatId, messageId) {
  const chat = Store.Chat.get(chatId);
  const atMessage = chat.msgs.models.find((model) => model.id.id === messageId);
  const args = {
    collection: chat.msgs,
    msg: atMessage,
    isUnreadDivider: false
  };
  const result = await Store.Cmd.default._openChat(chat, args);
  return result;
}


/***/ }),

/***/ "./functions/poll-creation.js":
/*!************************************!*\
  !*** ./functions/poll-creation.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pollCreation": () => (/* binding */ pollCreation)
/* harmony export */ });
async function pollCreation(idUser, poll) {
  if (typeof poll !== 'object') {
    return WAPI.scope(idUser, true, 404, 'poll must be an object');
  }
  if (!poll?.name) {
    return WAPI.scope(idUser, true, 404, 'Missing object name');
  }
  if (!poll?.options) {
    return WAPI.scope(idUser, true, 404, 'Missing object options');
  }
  if (
    typeof poll.selectableOptionsCount !== 'number' ||
    (poll.selectableOptionsCount !== 1 && poll.selectableOptionsCount !== 0)
  ) {
    return WAPI.scope(
      idUser,
      true,
      404,
      'Error checking selectableOptionsCount!'
    );
  }

  const options = poll.options;
  if (Array.isArray(options) && options.length > 0) {
    for (let index in options) {
      if (typeof options[index] !== 'function') {
        if (!options[index].name) {
          return WAPI.scope(idUser, true, 404, 'Missing object name');
        }
        if (typeof options[index].name !== 'string') {
          return WAPI.scope(idUser, true, 404, 'Passed string value in name');
        }
      }
    }
  }

  const chat = await WAPI.sendExist(idUser);
  if (chat && chat.status !== 404 && chat.id) {
    await Store.Survey.sendPollCreation({
      chat: chat,
      poll: poll,
      quotedMsg: null
    });
    return { error: false, lastReceivedKey: chat.lastReceivedKey };
  } else {
    if (!chat.error) {
      chat.error = true;
    }
    return chat;
  }
}


/***/ }),

/***/ "./functions/process-files.js":
/*!************************************!*\
  !*** ./functions/process-files.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "processFiles": () => (/* binding */ processFiles)
/* harmony export */ });
async function processFiles(chat, blobs) {
  if (!Array.isArray(blobs)) {
    blobs = [blobs];
  }
  const mediaCollection = new Store.MediaCollection({
    chatParticipantCount: chat.getParticipantCount()
  });

  await mediaCollection.processAttachments(
    Debug.VERSION === '0.4.613'
      ? blobs
      : blobs.map((blob) => {
          return {
            file: blob
          };
        }),
    chat,
    1
  );
  return mediaCollection;
}


/***/ }),

/***/ "./functions/process-message-object.js":
/*!*********************************************!*\
  !*** ./functions/process-message-object.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "processMessageObj": () => (/* binding */ processMessageObj)
/* harmony export */ });
async function processMessageObj(
  messageObj,
  includeMe,
  includeNotifications
) {
  if (messageObj.isNotification) {
    if (includeNotifications) {
      return await WAPI._serializeMessageObj(messageObj);
    } else {
      return;
    }
  } else if (messageObj.id.fromMe === false || includeMe) {
    return await WAPI._serializeMessageObj(messageObj);
  }
  return;
}


/***/ }),

/***/ "./functions/promote-participant.js":
/*!******************************************!*\
  !*** ./functions/promote-participant.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "promoteParticipant": () => (/* binding */ promoteParticipant)
/* harmony export */ });
async function promoteParticipant(groupId, contactsId, done) {
  const chat = Store.Chat.get(groupId);

  if (!Array.isArray(contactsId)) {
    contactsId = [contactsId];
  }

  contactsId = await Promise.all(contactsId.map((c) => WAPI.sendExist(c)));
  contactsId = contactsId
    .filter((c) => !c.erro && c.isUser)
    .map((c) => chat.groupMetadata.participants.get(c.id))
    .filter((c) => typeof c !== 'undefined')
    .map((c) => c.id);

  if (!contactsId.length) {
    typeof done === 'function' && done(false);
    return false;
  }

  await window.Store.WapQuery.promoteParticipants(chat.id, contactsId);

  const participants = contactsId.map((c) =>
    chat.groupMetadata.participants.get(c)
  );

  await window.Store.Participants.promoteParticipants(chat, participants);

  typeof done === 'function' && done(true);
  return true;
}


/***/ }),

/***/ "./functions/remove-participant.js":
/*!*****************************************!*\
  !*** ./functions/remove-participant.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeParticipant": () => (/* binding */ removeParticipant)
/* harmony export */ });
async function removeParticipant(groupId, contactsId, done) {
  const chat = Store.Chat.get(groupId);

  if (!Array.isArray(contactsId)) {
    contactsId = [contactsId];
  }

  contactsId = await Promise.all(contactsId.map((c) => WAPI.sendExist(c)));
  contactsId = contactsId
    .filter((c) => !c.erro && c.isUser)
    .map((c) => chat.groupMetadata.participants.get(c.id))
    .filter((c) => typeof c !== 'undefined')
    .map((c) => c.id);

  if (!contactsId.length) {
    typeof done === 'function' && done(false);
    return false;
  }

  await window.Store.WapQuery.removeParticipants(chat.id, contactsId);

  const participants = contactsId.map((c) =>
    chat.groupMetadata.participants.get(c)
  );

  await window.Store.Participants.removeParticipants(chat, participants);

  typeof done === 'function' && done(true);
  return true;
}


/***/ }),

/***/ "./functions/reply.js":
/*!****************************!*\
  !*** ./functions/reply.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reply": () => (/* binding */ reply)
/* harmony export */ });
async function reply(chatId, content, quotedMessageId) {
  if (typeof chatId != 'string') {
    return WAPI.scope(
      null,
      true,
      404,
      'enter the chatid variable as an string'
    );
  }
  if (typeof content != 'string') {
    return WAPI.scope(
      null,
      true,
      404,
      'enter the content variable as an string'
    );
  }
  if (typeof quotedMessageId != 'string') {
    return WAPI.scope(
      null,
      true,
      404,
      'enter the content variable as an string'
    );
  }
  const chat = await WAPI.sendExist(chatId);
  if (chat && chat.status != 404) {
    let To = chat.id;
    const m = { type: 'deleteMessages' };
    let quotedMsgOptions = {};

    let quotedMessage = await WAPI.getMessageById(quotedMessageId, null, false);
    if (quotedMessage.erro == undefined) {
      let checkID = await WAPI.checkIdMessage(
        quotedMessage.to._serialized,
        quotedMessageId
      );
      if (checkID.erro == true) {
        return checkID;
      }
    } else {
      let obj = WAPI.scope(
        To,
        true,
        404,
        `The id ${quotedMessageId} does not exist!`
      );
      Object.assign(obj, m);
      return obj;
    }

    quotedMsgOptions = quotedMessage.msgContextInfo(chat);

    let checkID = await WAPI.checkIdMessage(chatId, quotedMessageId);
    if (checkID.erro == true) {
      return checkID;
    }

    const newMsgId = await window.WAPI.getNewMessageId(chat.id._serialized);
    const fromwWid = await Store.MaybeMeUser.getMaybeMeUser();
    let inChat = await WAPI.getchatId(chat.id).catch(() => {});
    if (inChat) {
      chat.lastReceivedKey._serialized = inChat._serialized;
      chat.lastReceivedKey.id = inChat.id;
    }
    const message = {
      id: newMsgId,
      ack: 0,
      body: content,
      from: fromwWid,
      to: chat.id,
      local: !0,
      self: 'out',
      t: parseInt(new Date().getTime() / 1000),
      isNewMsg: !0,
      type: 'chat',
      ...quotedMsgOptions
    };

    const result = (
      await Promise.all(window.Store.addAndSendMsgToChat(chat, message))
    )[1];

    if (result === 'success' || result === 'OK') {
      let obj = WAPI.scope(newMsgId, false, result, '');
      Object.assign(obj, m);
      return obj;
    } else {
      let obj = WAPI.scope(newMsgId, true, result, '');
      Object.assign(obj, m);
      return obj;
    }
  } else {
    return chat;
  }
}


/***/ }),

/***/ "./functions/restart-service.js":
/*!**************************************!*\
  !*** ./functions/restart-service.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "restartService": () => (/* binding */ restartService)
/* harmony export */ });
async function restartService() {
  await Store.ServiceWorker.default.restart();
  return true;
}


/***/ }),

/***/ "./functions/return-reply.js":
/*!***********************************!*\
  !*** ./functions/return-reply.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "returnReply": () => (/* binding */ returnReply)
/* harmony export */ });
async function returnReply(message) {
  if (typeof message != 'object') {
    return WAPI.scope(
      null,
      true,
      404,
      'enter the message variable as an object'
    );
  }
  if (
    message &&
    message.quotedMsg &&
    message.quotedMsg.type &&
    message.quotedMsgObj
  ) {
    return message.quotedMsgObj;
  } else {
    return false;
  }
}


/***/ }),

/***/ "./functions/revoke-invite-link.js":
/*!*****************************************!*\
  !*** ./functions/revoke-invite-link.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "revokeGroupInviteLink": () => (/* binding */ revokeGroupInviteLink)
/* harmony export */ });
async function revokeGroupInviteLink(chatId) {
  var chat = Store.Chat.get(chatId);
  if (!chat.isGroup) return false;
  await Store.GroupInvite.sendRevokeGroupInviteCode(chat.id);
  return true;
}


/***/ }),

/***/ "./functions/send-buttons.js":
/*!***********************************!*\
  !*** ./functions/send-buttons.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sendButtons": () => (/* binding */ sendButtons)
/* harmony export */ });
async function sendButtons(to, title, buttons, subtitle) {
  if (typeof title != 'string' || title.length === 0) {
    return WAPI.scope(to, true, 404, 'It is necessary to write a title!');
  }

  if (typeof subtitle != 'string' || subtitle.length === 0) {
    return WAPI.scope(to, true, 404, 'It is necessary to write a subtitle!');
  }

  if (Array.isArray(buttons) && buttons.length > 0) {
    for (let index in buttons) {
      if (typeof buttons[index] !== 'function') {
        if (!buttons[index].buttonText) {
          return WAPI.scope(to, true, 404, 'passed object buttonText');
        }
        if (typeof buttons[index].buttonText !== 'object') {
          return WAPI.scope(to, true, 404, 'passed object value in buttonText');
        }
        if (!buttons[index].buttonText.displayText) {
          return WAPI.scope(to, true, 404, 'passed object displayText');
        }
        if (typeof buttons[index].buttonText.displayText !== 'string') {
          return WAPI.scope(
            to,
            true,
            404,
            'passed string value in displayText'
          );
        }
        if (!buttons[index].buttonId) {
          buttons[index].buttonId = `id${index}`;
        }
        if (!buttons[index].type) {
          buttons[index].type = 1;
        }
      }
    }
  }

  const chat = await WAPI.sendExist(to);

  if (chat && chat.status != 404 && chat.id) {
    const newMsgId = await window.WAPI.getNewMessageId(chat.id._serialized);
    const fromwWid = await Store.MaybeMeUser.getMaybeMeUser();

    const message = {
      id: newMsgId,
      ack: 0,
      from: fromwWid,
      to: chat.id,
      local: !0,
      self: 'out',
      t: parseInt(new Date().getTime() / 1000),
      isNewMsg: !0,
      type: 'chat',
      body: title,
      caption: title,
      content: title,
      footer: subtitle,
      isDynamicReplyButtonsMsg: true,
      isForwarded: false,
      isFromTemplate: true,
      invis: true,
      fromMe: false
    };
    var obj = {
      dynamicReplyButtons: buttons
    };
    Object.assign(message, obj);
    var result = (
      await Promise.all(window.Store.addAndSendMsgToChat(chat, message))
    )[1];
    if (result === 'success' || result === 'OK') {
      return WAPI.scope(newMsgId, false, result, null);
    } else {
      return WAPI.scope(newMsgId, true, result, null);
    }
  } else {
    return chat;
  }
}


/***/ }),

/***/ "./functions/send-chat-state.js":
/*!**************************************!*\
  !*** ./functions/send-chat-state.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sendChatstate": () => (/* binding */ sendChatstate)
/* harmony export */ });
async function sendChatstate(state, chatId) {
  switch (state) {
    case '0':
      await window.Store.ChatStates.sendChatStateComposing(chatId);
      break;
    case '1':
      await window.Store.ChatStates.sendChatStateRecording(chatId);
      break;
    case '2':
      await window.Store.ChatStates.sendChatStatePaused(chatId);
      break;
    default:
      return false;
  }
  return true;
}


/***/ }),

/***/ "./functions/send-contact-vcard-list.js":
/*!**********************************************!*\
  !*** ./functions/send-contact-vcard-list.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sendContactVcardList": () => (/* binding */ sendContactVcardList)
/* harmony export */ });
async function sendContactVcardList(chatId, contacts) {
  if (typeof chatId != 'string') {
    return WAPI.scope(
      chatId,
      true,
      null,
      "incorrect parameter, insert an string. Example: '222222222222@c.us'"
    );
  }

  if (!Array.isArray(contacts)) {
    return WAPI.scope(
      chatId,
      true,
      null,
      "incorrect parameter, insert an array. Example: ['222222222222@c.us', '333333333333@c.us, ... ]"
    );
  }

  if (contacts.length === 1) {
    return WAPI.scope(
      chatId,
      true,
      null,
      "Enter more than one number to send. Example: ['222222222222@c.us', '333333333333@c.us, ... ]"
    );
  }

  const chat = await WAPI.sendExist(chatId);

  if (!chat.erro) {
    var conta = contacts.map(async (e) => {
      return await WAPI.sendExist(e);
    });

    var ar = await Promise.all(conta);
    var cont = new Array();

    for (var key in ar) {
      if (typeof ar[key] === 'object') {
        cont.push(ar[key].__x_contact);
      }
    }

    var vcard = cont.map(async (e) => {
      if (typeof e === 'object') {
        return await window.Store.Vcard.vcardFromContactModel(e);
      }
    });

    var newMsgId = await window.WAPI.getNewMessageId(chat.id._serialized);
    const fromwWid = await Store.MaybeMeUser.getMaybeMeUser();
    let inChat = await WAPI.getchatId(chat.id).catch(() => {});

    if (inChat) {
      chat.lastReceivedKey._serialized = inChat._serialized;
      chat.lastReceivedKey.id = inChat.id;
    }

    var Vcards = await Promise.all(vcard);

    const message = {
      id: newMsgId,
      ack: 0,
      from: fromwWid,
      local: !0,
      self: 'in',
      t: parseInt(new Date().getTime() / 1000),
      to: chat.id,
      type: 'multi_vcard',
      vcardList: Vcards,
      isNewMsg: !0
    };

    var result =
      (await Promise.all(Store.addAndSendMsgToChat(chat, message)))[1] || '';

    var m = { from: contacts, type: 'multi_vcard' };

    if (result === 'success' || result === 'OK') {
      var obj = WAPI.scope(newMsgId, false, result, null);
      Object.assign(obj, m);
      return obj;
    } else {
      var obj = WAPI.scope(newMsgId, true, result, null);
      Object.assign(obj, m);
      return obj;
    }
  } else {
    return chat;
  }
}


/***/ }),

/***/ "./functions/send-contact-vcard.js":
/*!*****************************************!*\
  !*** ./functions/send-contact-vcard.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sendContactVcard": () => (/* binding */ sendContactVcard)
/* harmony export */ });
async function sendContactVcard(chatId, contact, name) {
  if (typeof chatId != 'string' || chatId.length === 0) {
    return WAPI.scope(chatId, true, 404, 'It is necessary to pass the number!');
  }

  if (typeof contact != 'string' || contact.length === 0) {
    return WAPI.scope(
      contact,
      true,
      404,
      'It is necessary to pass the number!'
    );
  }

  const chat = await WAPI.sendExist(chatId);
  const cont = await WAPI.sendExist(contact);
  if (
    chat &&
    chat.status != 404 &&
    chat.id &&
    cont &&
    cont.status != 404 &&
    cont.id
  ) {
    const newMsgId = await window.WAPI.getNewMessageId(chat.id._serialized);
    let inChat = await WAPI.getchatId(chat.id).catch(() => {
      return WAPI.scope(chat.id, true, 404, 'Error to number ' + chatId);
    });

    if (inChat) {
      chat.lastReceivedKey && chat.lastReceivedKey._serialized
        ? (chat.lastReceivedKey._serialized = inChat._serialized)
        : '';
      chat.lastReceivedKey && chat.lastReceivedKey.id
        ? (chat.lastReceivedKey.id = inChat.id)
        : '';
    }

    if (!newMsgId) {
      return WAPI.scope(chatId, true, 404, 'Error to newId');
    }

    const fromwWid = await Store.MaybeMeUser.getMaybeMeUser();
    const body = await window.Store.Vcard.vcardFromContactModel(
      cont.__x_contact
    );

    name = !name ? cont.__x_formattedTitle : name;

    const message = {
      id: newMsgId,
      ack: 0,
      body: body.vcard,
      from: fromwWid,
      to: chat.id,
      local: !0,
      self: 'out',
      t: parseInt(new Date().getTime() / 1000),
      isNewMsg: !0,
      type: 'vcard'
    };

    const result = (
      await Promise.all(window.Store.addAndSendMsgToChat(chat, message))
    )[1];

    var m = { from: contact, type: 'vcard' };
    if (result === 'success' || result === 'OK') {
      var obj = WAPI.scope(newMsgId, false, result, null);
      Object.assign(obj, m);
      return obj;
    } else {
      var obj = WAPI.scope(newMsgId, true, result, null);
      Object.assign(obj, m);
      return obj;
    }
  } else {
    return chat;
  }
}


/***/ }),

/***/ "./functions/send-file.js":
/*!********************************!*\
  !*** ./functions/send-file.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sendFile": () => (/* binding */ sendFile)
/* harmony export */ });
/* harmony import */ var _process_files__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./process-files */ "./functions/process-files.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper */ "./helper/index.js");



async function sendFile(
  file,
  chatid,
  filename,
  caption,
  type,
  status,
  passId,
  checkNumber = true,
  forcingReturn = false,
  delSend = true
) {
  type = type ? type : 'sendFile';

  if (typeof chatid != 'string' || chatid.length === 0) {
    return WAPI.scope(
      chatid,
      true,
      null,
      'incorrect parameter chatid, insert an string.'
    );
  }

  if (typeof filename !== 'string' || chatid.length === 0) {
    return WAPI.scope(
      chatid,
      true,
      null,
      'incorrect parameter filename, insert an string'
    );
  }

  if (typeof caption !== 'string' || chatid.length === 0) {
    return WAPI.scope(
      chatid,
      true,
      null,
      'incorrect parameter caption, insert an string'
    );
  }

  if (typeof file !== 'string' || chatid.length === 0) {
    return WAPI.scope(
      chatid,
      true,
      null,
      'incorrect parameter file, insert an string'
    );
  }

  var mime = file.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/);
  if (mime && mime.length) {
    mime = mime[1];
  }

  const chat = checkNumber
    ? await WAPI.sendExist(chatid)
    : await WAPI.returnChat(chatid);

  if (chat && chat.status != 404 && chat.id) {
    let inChat = await WAPI.getchatId(chat.id).catch(() => {
      return WAPI.scope(chat.id, true, 404, 'Error to number ' + chatid);
    });

    if (inChat) {
      chat.lastReceivedKey && chat.lastReceivedKey._serialized
        ? (chat.lastReceivedKey._serialized = inChat._serialized)
        : '';
      chat.lastReceivedKey && chat.lastReceivedKey.id
        ? (chat.lastReceivedKey.id = inChat.id)
        : '';
    }

    const m = { type: type, filename: filename, text: caption, mimeType: mime };
    const newMsgId = !passId
      ? await window.WAPI.getNewMessageId(chat.id._serialized, checkNumber)
      : await window.WAPI.setNewMessageId(passId, checkNumber);

    if (!newMsgId) {
      return WAPI.scope(chat.id, true, 404, 'Error to newId');
    }

    const result = await Store.Chat.find(chat.id)
      .then(async (_chat) => {
        const mediaBlob = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.base64ToFile)(file);
        return await (0,_process_files__WEBPACK_IMPORTED_MODULE_0__.processFiles)(_chat, mediaBlob)
          .then(async (mc) => {
            if (typeof mc === 'object' && mc._models && mc._models[0]) {
              const media = mc._models[0];
              const enc = await WAPI.encryptAndUploadFile(
                media.type,
                mediaBlob
              );

              if (enc === false) {
                return WAPI.scope(
                  chat.id,
                  true,
                  404,
                  'Error to encryptAndUploadFile'
                );
              }

              const fromwWid = await Store.MaybeMeUser.getMaybeMeUser();
              const message = {
                id: newMsgId,
                ack: 0,
                from: fromwWid,
                to: chat.id,
                local: !0,
                self: 'out',
                t: parseInt(new Date().getTime() / 1000),
                isNewMsg: !0,
                invis: true,
                type: media.type,
                deprecatedMms3Url: enc.url,
                directPath: enc.directPath,
                encFilehash: enc.encFilehash,
                filehash: enc.filehash,
                mediaKeyTimestamp: enc.mediaKeyTimestamp,
                mimetype: media.mimetype,
                ephemeralStartTimestamp: enc.mediaKeyTimestamp,
                mediaKey: enc.mediaKey,
                size: media.filesize,
                caption: caption,
                filename: filename
              };
              if (forcingReturn) {
                if (delSend) {
                  while (true) {
                    const connection = window.Store.State.Socket.state;
                    if (connection === 'CONNECTED') {
                      const result = await window.Store.addAndSendMsgToChat(
                        chat,
                        message
                      );
                      await WAPI.sleep(5000);
                      const statusMsg = chat.msgs._models.filter(
                        (e) => e.id === newMsgId._serialized && e.ack > 0
                      );
                      if (statusMsg.length === 0) {
                        await WAPI.deleteMessages(chatid, [
                          newMsgId._serialized
                        ]);
                      } else {
                        let obj = WAPI.scope(
                          newMsgId,
                          false,
                          WAPI._serializeForcing(result),
                          null
                        );
                        Object.assign(obj, m);
                        return obj;
                      }
                    }
                  }
                } else {
                  const result = await window.Store.addAndSendMsgToChat(
                    chat,
                    message
                  );
                  let obj = WAPI.scope(
                    newMsgId,
                    false,
                    WAPI._serializeForcing(result),
                    null
                  );
                  Object.assign(obj, m);
                  return obj;
                }
              }
              try {
                return (
                  await Promise.all(
                    window.Store.addAndSendMsgToChat(chat, message)
                  )
                )[1];
              } catch (e) {
                return WAPI.scope(
                  chat.id,
                  true,
                  404,
                  'The message was not sent'
                );
              }
            } else {
              return WAPI.scope(chat.id, true, 404, 'Error to models');
            }
          })
          .catch(() => {
            return WAPI.scope(chat.id, true, 404, 'Error to processFiles');
          });
      })
      .catch(() => {
        return WAPI.scope(chat.id, true, 404, 'Error to chat not find');
      });

    if (result.erro === false) {
      return result;
    }

    if (result === 'success' || result === 'OK') {
      var obj = WAPI.scope(newMsgId, false, result, null);
      Object.assign(obj, m);
      return obj;
    }

    if (result.erro === true) {
      return result;
    }

    var obj = WAPI.scope(newMsgId, true, result, null);
    Object.assign(obj, m);
    return obj;
  } else {
    if (!chat.erro) {
      chat.erro = true;
    }
    return chat;
  }
}


/***/ }),

/***/ "./functions/send-image-as-stricker.js":
/*!*********************************************!*\
  !*** ./functions/send-image-as-stricker.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sendImageAsSticker": () => (/* binding */ sendImageAsSticker)
/* harmony export */ });
/* harmony import */ var _helper_base64_to_file__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/base64-to-file */ "./helper/base64-to-file.js");
/* harmony import */ var _send_sticker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./send-sticker */ "./functions/send-sticker.js");



/**
 * Sends image as sticker to given chat id
 * @param {string} imageBase64 Image as base64 A valid webp image is required.
 * @param {string} chatId chat id '000000000000@c.us'
 * @param {*} metadata about the image. Based on [sharp metadata](https://sharp.pixelplumbing.com/api-input#metadata)
 */
async function sendImageAsSticker(imageBase64, chatId, metadata, type) {
  const mediaBlob = (0,_helper_base64_to_file__WEBPACK_IMPORTED_MODULE_0__.base64ToFile)(
    'data:image/webp;base64,' + imageBase64,
    'file.webp'
  );
  let encrypted = await window.WAPI.encryptAndUploadFile('sticker', mediaBlob);

  return await (0,_send_sticker__WEBPACK_IMPORTED_MODULE_1__.sendSticker)(encrypted, chatId, metadata, type);
}


/***/ }),

/***/ "./functions/send-image-with-product.js":
/*!**********************************************!*\
  !*** ./functions/send-image-with-product.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sendImageWithProduct": () => (/* binding */ sendImageWithProduct)
/* harmony export */ });
/* harmony import */ var _process_files__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./process-files */ "./functions/process-files.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper */ "./helper/index.js");



/**
 * Sends product with product image to given chat id
 * @param {string} imgBase64 Base64 image data
 * @param {string} chatid Chat id
 * @param {string} caption Caption
 * @param {string} bizNumber string the @c.us number of the business account from which you want to grab the product
 * @param {string} productId string the id of the product within the main catalog of the aforementioned business
 * @param {Function} done Optional callback
 */
function sendImageWithProduct(
  imgBase64,
  chatid,
  caption,
  bizNumber,
  productId,
  done
) {
  Store.Catalog.findCarouselCatalog(bizNumber).then((cat) => {
    if (cat && cat[0]) {
      const product = cat[0].productCollection.get(productId);
      const temp = {
        productMsgOptions: {
          businessOwnerJid: product.catalogWid.toString({
            legacy: !0
          }),
          productId: product.id.toString(),
          url: product.url,
          productImageCount: product.productImageCollection.length,
          title: product.name,
          description: product.description,
          currencyCode: product.currency,
          priceAmount1000: product.priceAmount1000,
          type: 'product'
        },
        caption
      };

      var idUser = new Store.WidFactory.createWid(chatid);

      return Store.Chat.find(idUser).then((chat) => {
        var mediaBlob = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.base64ToFile)(imgBase64, product.name);
        // var mc = new Store.MediaCollection(chat);
        // mc.processFiles([mediaBlob], chat, 1)
        (0,_process_files__WEBPACK_IMPORTED_MODULE_0__.processFiles)(chat, mediaBlob).then((mc) => {
          var media = mc.models[0];
          Object.entries(temp.productMsgOptions).map(
            ([k, v]) => (media.mediaPrep._mediaData[k] = v)
          );
          media.mediaPrep.sendToChat(chat, temp);
          if (done !== undefined) done(true);
        });
      });
    }
  });
}


/***/ }),

/***/ "./functions/send-image.js":
/*!*********************************!*\
  !*** ./functions/send-image.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sendImage": () => (/* binding */ sendImage)
/* harmony export */ });
/* harmony import */ var _send_file__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./send-file */ "./functions/send-file.js");


/**
 * Sends image to given chat if
 * @param {string} imgBase64 base64 encoded file
 * @param {string} chatid Chat id
 * @param {string} filename
 * @param {string} caption
 * @param {Function} done Optional callback
 */
function sendImage(
  imgBase64,
  chatid,
  filename,
  caption,
  type,
  status = false,
  passId
) {
  return (0,_send_file__WEBPACK_IMPORTED_MODULE_0__.sendFile)(imgBase64, chatid, filename, caption, type, status, passId);
}


/***/ }),

/***/ "./functions/send-link-preview.js":
/*!****************************************!*\
  !*** ./functions/send-link-preview.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sendLinkPreview": () => (/* binding */ sendLinkPreview)
/* harmony export */ });
async function sendLinkPreview(chatId, url, text) {
  text = text || '';
  const _Path = {
    Protocol: '^(https?:\\/\\/)?',
    Domain: '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|',
    IP: '((\\d{1,3}\\.){3}\\d{1,3}))',
    Port: '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*',
    Query: '(\\?[;&a-z\\d%_.~+=-]*)?',
    End: '(\\#[-a-z\\d_]*)?$',
    Reg: () => {
      return new RegExp(
        _Path.Protocol +
          _Path.Domain +
          _Path.IP +
          _Path.Port +
          _Path.Query +
          _Path.End,
        'i'
      );
    }
  };
  if (!_Path.Reg().test(url)) {
    var text =
      'Use a valid HTTP protocol. Example: https://www.youtube.com/watch?v=V1bFr2SWP1';
    return WAPI.scope(chatId, true, null, text);
  }
  var chat = await WAPI.sendExist(chatId);
  if (!chat.erro) {
    const newMsgId = await window.WAPI.getNewMessageId(chat.id._serialized);
    const fromwWid = await Store.MaybeMeUser.getMaybeMeUser();
    let inChat = await WAPI.getchatId(chat.id).catch(() => {});
    if (inChat) {
      chat.lastReceivedKey._serialized = inChat._serialized;
      chat.lastReceivedKey.id = inChat.id;
    }
    const link = await window.Store.Validators.findLink(url);
    const message = {
      id: newMsgId,
      links: link,
      ack: 0,
      body: url,
      from: fromwWid,
      to: chat.id,
      local: !0,
      self: 'out',
      t: parseInt(new Date().getTime() / 1000),
      isNewMsg: !0,
      type: 'chat',
      subtype: 'url',
      preview: true,
      disappearingModeInitiator: 'chat',
      thumbnail:
        'iVBORw0KGgoAAAANSUhEUgAAAGMAAABjCAIAAAAAWSnCAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAA0SURBVHhe7cExAQAAAMKg9U9tCj8gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADipAXM+AAFcstx4AAAAAElFTkSuQmCC',
      content: url,
      canonicalUrl: url,
      description: url,
      matchedText: url,
      title: text
    };
    const result = (
      await Promise.all(window.Store.addAndSendMsgToChat(chat, message))
    )[1];
    let m = { type: 'LinkPreview', url: url, text: text };
    if (result === 'success' || result === 'OK') {
      let obj = WAPI.scope(newMsgId, false, result, null);
      Object.assign(obj, m);
      return obj;
    } else {
      let obj = WAPI.scope(newMsgId, true, result, null);
      Object.assign(obj, m);
      return obj;
    }
  } else {
    return chat;
  }
}


/***/ }),

/***/ "./functions/send-list-menu.js":
/*!*************************************!*\
  !*** ./functions/send-list-menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sendListMenu": () => (/* binding */ sendListMenu)
/* harmony export */ });
/**
 * Send List menu
 * @param {string} to the numberid xxx@c.us
 * @param {string} title the titulo
 * @param {string} subtitle the subtitle
 * @param {string} description the description
 * @param {string} buttonText the name button
 * @param {array} menu List menu
 */
async function sendListMenu(
  to,
  title,
  subTitle,
  description,
  buttonText,
  menu
) {
  if (!title && typeof title != 'string') {
    return WAPI.scope(null, true, 404, 'Enter the title variable as an string');
  }

  if (!subTitle && typeof subTitle != 'string') {
    return WAPI.scope(
      null,
      true,
      404,
      'Enter the SubTitle variable as an string'
    );
  }

  if (!description && typeof description != 'string') {
    return WAPI.scope(
      null,
      true,
      404,
      'Enter the description variable as an string'
    );
  }

  if (!buttonText && typeof buttonText != 'string') {
    return WAPI.scope(
      null,
      true,
      404,
      'Enter the buttonText variable as an string'
    );
  }

  if (!menu && Array.isArray(menu) === false) {
    return WAPI.scope(null, true, 404, 'Enter the menu variable as an array');
  }

  for (let index in menu) {
    if (index !== 'remove') {
      if (
        !!menu[index].title &&
        typeof menu[index].title === 'string' &&
        menu[index].title.length
      ) {
        if (
          !!menu[index].rows &&
          Array.isArray(menu[index].rows) &&
          menu[index].rows.length
        ) {
          for (let i in menu[index].rows) {
            if (i !== 'remove') {
              if (
                !!menu[index].rows[i].title &&
                menu[index].rows[i].title.length
              ) {
                if (
                  !!menu[index].rows[i].description &&
                  menu[index].rows[i].description.length
                ) {
                  if (!menu[index].rows[i].rowId) {
                    menu[index].rows[i].rowId = `dessert_${i}`;
                  }
                }
              } else {
                return WAPI.scope(
                  null,
                  true,
                  404,
                  'Enter the Title variable as an string'
                );
              }
            }
          }
        } else {
          return WAPI.scope(null, true, 404, 'Rows must be an object array');
        }
      } else {
        return WAPI.scope(null, true, 404, 'Incorrect Title passed in menu');
      }
    }
  }

  const chat = await WAPI.sendExist(to);

  if (chat && chat.status != 404 && chat.id) {
    const newMsgId = await window.WAPI.getNewMessageId(chat.id._serialized);
    const fromwWid = await Store.MaybeMeUser.getMaybeMeUser();
    const inChat = await WAPI.getchatId(chat.id).catch(() => {});

    if (inChat) {
      chat.lastReceivedKey._serialized = inChat._serialized;
      chat.lastReceivedKey.id = inChat.id;
    }

    const message = {
      id: newMsgId,
      ack: 0,
      from: fromwWid,
      to: chat.id,
      local: !0,
      self: 'out',
      t: parseInt(new Date().getTime() / 1000),
      isNewMsg: !0,
      invis: true,
      footer: subTitle,
      notifyName: '',
      type: 'list',
      interactiveAnnotations: true,
      interactiveMessage: true,
      star: false,
      broadcast: false,
      fromMe: false,
      list: {
        title: title,
        description: description,
        buttonText: buttonText,
        listType: 1,
        sections: menu
      }
    };

    var result = (
      await Promise.all(window.Store.addAndSendMsgToChat(chat, message))
    )[1];
    if (result === 'success' || result === 'OK') {
      return WAPI.scope(newMsgId, false, result, null);
    } else {
      return WAPI.scope(newMsgId, true, result, null);
    }
  } else {
    return chat;
  }
}


/***/ }),

/***/ "./functions/send-location.js":
/*!************************************!*\
  !*** ./functions/send-location.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sendLocation": () => (/* binding */ sendLocation)
/* harmony export */ });
async function sendLocation(
  chatId,
  latitude,
  longitude,
  location = null
) {
  const chat = await WAPI.sendExist(chatId);
  if (isNaN(Number(latitude)) || isNaN(Number(longitude))) {
    return WAPI.scope(
      chatId,
      true,
      null,
      'latitude and longitude must be numbers'
    );
  }
  if (!chat.erro) {
    const newMsgId = await window.WAPI.getNewMessageId(chat.id._serialized);
    const inChat = await WAPI.getchatId(chat.id).catch(() => {});
    const fromwWid = await Store.MaybeMeUser.getMaybeMeUser();

    if (inChat) {
      chat.lastReceivedKey._serialized = inChat._serialized;
      chat.lastReceivedKey.id = inChat.id;
    }
    const newid = await window.WAPI.getNewMessageId(
      chat.id._serialized,
      chatId
    );
    const message = {
      type: 'location',
      ack: 0,
      from: fromwWid,
      id: newid,
      local: !0,
      isNewMsg: !0,
      self: 'out',
      t: parseInt(new Date().getTime() / 1000),
      to: chat.id,
      lat: Number(latitude),
      lng: Number(longitude),
      loc: location
    };

    const result =
      (await Promise.all(Store.addAndSendMsgToChat(chat, message)))[1] || '';

    let m = {
        latitude: latitude,
        longitude: longitude,
        title: location,
        type: 'location'
      },
      obj;
    if (result == 'success' || result == 'OK') {
      obj = WAPI.scope(newMsgId, false, result, null);
      Object.assign(obj, m);
      return obj;
    } else {
      obj = WAPI.scope(newMsgId, true, result, null);
      Object.assign(obj, m);
      return obj;
    }
  } else {
    return chat;
  }
}


/***/ }),

/***/ "./functions/send-message-scope.js":
/*!*****************************************!*\
  !*** ./functions/send-message-scope.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "baseSendMessage": () => (/* binding */ baseSendMessage),
/* harmony export */   "sendMessage": () => (/* binding */ sendMessage)
/* harmony export */ });
/**
 * send message in options mode
 * @param {string} to contact number
 * @param {string} body message body
 * @param {object} options shipping options
 */
async function sendMessage(to, body, options = {}) {
  const types = [
    'sendText',
    'sendAudioBase64',
    'sendImageFromBase64',
    'sendAudio',
    'sendFile',
    'sendImage'
  ];
  let typesObj;
  types.reduce(
    (a, v) =>
      (typesObj = {
        ...a,
        [v]: v
      }),
    {}
  );

  if (!body) {
    return WAPI.scope(undefined, true, null, `parameters are missing`);
  }

  if (!options.type || (options.type && !types.includes(options.type))) {
    return WAPI.scope(
      undefined,
      true,
      null,
      `pass the message type, examples: ${types.join(', ')}`
    );
  }

  const chat = await WAPI.sendExist(to);
  const merge = {};

  if (chat && chat.status != 404 && chat.id) {
    const newMsgId = await WAPI.getNewMessageId(chat.id._serialized);
    const fromwWid = await Store.MaybeMeUser.getMaybeMeUser();

    if (options.type === typesObj.sendText) {
      merge.type = 'chat';
    }

    if (
      options.type === typesObj.sendAudioBase64 ||
      options.type === typesObj.sendAudio ||
      options.type === typesObj.sendFile ||
      options.type === typesObj.sendImage ||
      options.type === typesObj.sendImageFromBase64
    ) {
      let result = await Store.Chat.find(chat.id);
      const mediaBlob = WAPI.base64ToFile(body);
      const mc = await WAPI.processFiles(result, mediaBlob);
      if (typeof mc === 'object' && mc._models && mc._models[0]) {
        const media = mc._models[0];
        let enc, type;

        if (
          options.type === typesObj.sendFile ||
          options.type === typesObj.sendImage ||
          options.type === typesObj.sendImageFromBase64
        ) {
          type = media.type;
          merge.caption = options?.caption;
          merge.filename = options?.filename;
          enc = await WAPI.encryptAndUploadFile(type, mediaBlob);
        } else {
          type = 'ptt';
          enc = await WAPI.encryptAndUploadFile(type, mediaBlob);
        }

        if (enc === false) {
          return WAPI.scope(
            chat.id,
            true,
            404,
            'Error to encryptAndUploadFile'
          );
        }

        merge.type = type;
        merge.duration = media?.__x_mediaPrep?._mediaData?.duration;
        merge.mimetype = media.mimetype;
        merge.size = media.filesize;
        merge.deprecatedMms3Url = enc.url;
        merge.directPath = enc.directPath;
        merge.encFilehash = enc.encFilehash;
        merge.filehash = enc.filehash;
        merge.mediaKeyTimestamp = enc.mediaKeyTimestamp;
        merge.ephemeralStartTimestamp = enc.mediaKeyTimestamp;
        merge.mediaKey = enc.mediaKey;
        body = undefined;
      }
    }

    if (!Object.keys(merge).length) {
      return WAPI.scope(undefined, true, null, 'Error sending message');
    }

    const message = WAPI.baseSendMessage(
      {
        to,
        body,
        newMsgId,
        fromwWid,
        chat
      },
      merge
    );

    try {
      const result = (
        await Promise.all(Store.addAndSendMsgToChat(chat, message))
      )[1];
      if (result === 'OK') {
        return WAPI.scope(newMsgId, false, result, null, options.type, body);
      }
      throw result;
    } catch (result) {
      return WAPI.scope(newMsgId, true, result, null, options.type, body);
    }
  } else {
    if (!chat.erro) {
      chat.erro = true;
    }

    return chat;
  }
}

function baseSendMessage(param, merge) {
  const message = {
    id: param.newMsgId,
    ack: 0,
    body: param?.body,
    from: param.fromwWid,
    to: param.chat.id,
    local: !0,
    self: 'out',
    t: parseInt(new Date().getTime() / 1000),
    isNewMsg: !0,
    ...merge
  };
  return message;
}


/***/ }),

/***/ "./functions/send-message-with-tags.js":
/*!*********************************************!*\
  !*** ./functions/send-message-with-tags.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sendMessageWithTags": () => (/* binding */ sendMessageWithTags)
/* harmony export */ });
async function sendMessageWithTags(to, body) {
  var chat = to.id ? to : Store.Chat.get(to);
  var chatId = chat.id._serialized;
  var msgIveSent = chat.msgs.filter((msg) => msg.__x_isSentByMe)[0];
  if (!msgIveSent) {
    return chat.sendMessage(body);
  }

  var tempMsg = Object.create(msgIveSent);
  var newId = await window.WAPI.getNewMessageId(chat.id._serialized);
  var mentionedJidList =
    body
      .match(/@(\d*)/g)
      .map((x) => new Store.WidFactory.createUserWid(x.replace('@', ''))) ||
    undefined;

  var extend = {
    ack: 0,
    id: newId,
    local: !0,
    self: 'out',
    t: parseInt(new Date().getTime() / 1000),
    to: new Store.WidFactory.createWid(chatId),
    isNewMsg: !0,
    type: 'chat',
    body,
    quotedMsg: null,
    mentionedJidList
  };

  Object.assign(tempMsg, extend);
  await Store.addAndSendMsgToChat(chat, tempMsg);
  return newId._serialized;
}


/***/ }),

/***/ "./functions/send-message-with-thumb.js":
/*!**********************************************!*\
  !*** ./functions/send-message-with-thumb.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sendMessageWithThumb": () => (/* binding */ sendMessageWithThumb)
/* harmony export */ });
function sendMessageWithThumb(
  thumb,
  url,
  title,
  description,
  chatId,
  done
) {
  var chatSend = WAPI.getChat(chatId);
  if (chatSend === undefined) {
    if (done !== undefined) done(false);
    return false;
  }
  var linkPreview = {
    canonicalUrl: url,
    description: description,
    matchedText: url,
    title: title,
    thumbnail: thumb
  };
  chatSend.sendMessage(url, {
    linkPreview: linkPreview,
    mentionedJidList: [],
    quotedMsg: null,
    quotedMsgAdminGroupJid: null
  });
  if (done !== undefined) done(true);
  return true;
}


/***/ }),

/***/ "./functions/send-message.js":
/*!***********************************!*\
  !*** ./functions/send-message.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sendMessage": () => (/* binding */ sendMessage)
/* harmony export */ });
async function sendMessage(
  to,
  content,
  status = false,
  passId,
  checkNumber = true,
  forcingReturn = false,
  delSend = true
) {
  if (status && content.length > 700) {
    return WAPI.scope(undefined, true, null, 'Use a maximum of 700 characters');
  }

  if (
    status === false &&
    (typeof content != 'string' || content.length === 0)
  ) {
    return WAPI.scope(
      undefined,
      true,
      null,
      'It is necessary to write a text!'
    );
  }

  if (status == false && (typeof to != 'string' || to.length === 0)) {
    return WAPI.scope(to, true, 404, 'It is necessary to number');
  }

  const chat = checkNumber
    ? await WAPI.sendExist(to)
    : await WAPI.returnChat(to);

  if (chat && chat.status != 404 && chat.id) {
    const t = status != false ? 'sendStatusText' : 'sendText';
    const m = { type: t, text: content };
    const newMsgId = !passId
      ? await window.WAPI.getNewMessageId(chat.id._serialized, checkNumber)
      : await window.WAPI.setNewMessageId(passId, checkNumber);
    const fromwWid = await Store.MaybeMeUser.getMaybeMeUser();

    let inChat = await WAPI.getchatId(chat.id).catch(() => {
      return WAPI.scope(chat.id, true, 404, 'Error to number ' + to);
    });

    if (inChat) {
      chat.lastReceivedKey && chat.lastReceivedKey._serialized
        ? (chat.lastReceivedKey._serialized = inChat._serialized)
        : '';
      chat.lastReceivedKey && chat.lastReceivedKey.id
        ? (chat.lastReceivedKey.id = inChat.id)
        : '';
    }

    if (!newMsgId) {
      return WAPI.scope(to, true, 404, 'Error to gerate newId');
    }

    const message = {
      id: newMsgId,
      ack: 0,
      body: content,
      from: fromwWid,
      to: chat.id,
      local: !0,
      self: 'out',
      t: parseInt(new Date().getTime() / 1000),
      isNewMsg: !0,
      type: 'chat'
    };

    if (forcingReturn) {
      if (delSend) {
        while (true) {
          const connection = window.Store.State.Socket.state;
          if (connection === 'CONNECTED') {
            const result = await window.Store.addAndSendMsgToChat(
              chat,
              message
            );
            await WAPI.sleep(5000);
            const statusMsg = chat.msgs._models.filter(
              (e) => e.id === newMsgId._serialized && e.ack > 0
            );
            if (statusMsg.length === 0) {
              await WAPI.deleteMessages(to, [newMsgId._serialized]);
            } else {
              let obj = WAPI.scope(
                newMsgId,
                false,
                WAPI._serializeForcing(result),
                content
              );
              Object.assign(obj, m);
              return obj;
            }
          }
        }
      } else {
        const result = await window.Store.addAndSendMsgToChat(chat, message);
        let obj = WAPI.scope(
          newMsgId,
          false,
          WAPI._serializeForcing(result),
          content
        );
        Object.assign(obj, m);
        return obj;
      }
    }

    try {
      const result = (
        await Promise.all(window.Store.addAndSendMsgToChat(chat, message))
      )[1];

      if (result === 'success' || result === 'OK') {
        const obj = WAPI.scope(newMsgId, false, result, content);
        Object.assign(obj, m);
        return obj;
      }
      if (result === 'ERROR_UNKNOWN' && to.includes('@g.us')) {
        const obj = WAPI.scope(
          newMsgId,
          true,
          result,
          'Could not send message to this group, possibly you have been removed'
        );
        Object.assign(obj, m);
        return obj;
      }
    } catch (result) {
      let res = result;
      if (result?.contact?.id) {
        res = result.contact.id;
      }
      if (result?.message) {
        res.message = result.message;
      }
      const obj = WAPI.scope(newMsgId, true, res, 'The message was not sent');
      Object.assign(obj, m);
      return obj;
    }
  } else {
    if (!chat.erro) {
      chat.erro = true;
    }
    return chat;
  }
}


/***/ }),

/***/ "./functions/send-message2.js":
/*!************************************!*\
  !*** ./functions/send-message2.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sendMessage2": () => (/* binding */ sendMessage2)
/* harmony export */ });
function sendMessage2(id, message, done) {
  var chat = WAPI.getChat(id);
  if (chat !== undefined) {
    try {
      if (done !== undefined) {
        chat.sendMessage(message).then(function () {
          done(true);
        });
      } else {
        chat.sendMessage(message);
      }
      return true;
    } catch (error) {
      if (done !== undefined) done(false);
      return false;
    }
  }
  if (done !== undefined) done(false);
  return false;
}


/***/ }),

/***/ "./functions/send-mute.js":
/*!********************************!*\
  !*** ./functions/send-mute.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sendMute": () => (/* binding */ sendMute)
/* harmony export */ });
async function sendMute(chatId, time, type) {
  var chat = await WAPI.sendExist(chatId);
  if (!chat.erro) {
    let TimeInt = null;
    var result = null,
      remove = null,
      texto = null;
    var To = await WAPI.getchatId(chat.id),
      isMute = await window.Store.Mute.get(chat.id),
      m = { type: 'sendMute', time: time, timeType: type };
    if (typeof time === 'number' && typeof type === 'string') {
      switch (type) {
        case 'hours':
          TimeInt = parseInt(
            new Date(
              new Date().setHours(new Date().getHours() + time)
            ).getTime() / 1000
          );
          break;
        case 'minutes':
          TimeInt = parseInt(
            new Date(
              new Date().setMinutes(new Date().getMinutes() + time)
            ).getTime() / 1000
          );
          break;
        case 'year':
          TimeInt = parseInt(
            new Date(
              new Date().setDate(new Date().getDate() + time)
            ).getTime() / 1000
          );
          break;
      }
      await window.Store.SendMute.sendConversationMute(chat.id, TimeInt, 0)
        .then((e) => {
          result = e;
        })
        .catch((e) => {
          result = e;
        });
    } else {
      remove = true;
      await window.Store.SendMute.sendConversationMute(
        chat.id,
        0,
        isMute.__x_expiration
      )
        .then((e) => {
          result = e;
        })
        .catch((e) => {
          result = e;
        });
    }
    if (result.status === 200) {
      if (remove) {
        isMute.__x_expiration = 0;
        isMute.__x_isMuted = false;
      } else {
        isMute.__x_expiration = TimeInt;
        isMute.__x_isMuted = true;
      }
      var obj = WAPI.scope(To, false, result.status, null);
      Object.assign(obj, m);
      return obj;
    } else {
      if (remove) {
        texto = 'is not mute to remove';
      } else {
        texto = 'This chat is already mute';
      }
      var obj = WAPI.scope(To, true, result['status'], texto);
      Object.assign(obj, m);
      return obj;
    }
  } else {
    return chat;
  }
}


/***/ }),

/***/ "./functions/send-ptt.js":
/*!*******************************!*\
  !*** ./functions/send-ptt.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sendPtt": () => (/* binding */ sendPtt)
/* harmony export */ });
/* harmony import */ var _process_files__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./process-files */ "./functions/process-files.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper */ "./helper/index.js");
/* harmony import */ var _jssha__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jssha */ "./jssha/index.js");
/* harmony import */ var _jssha__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_jssha__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Sends files
 * @param {string} Base64 base64 encoded file
 * @param {string} chatid Chat id
 */
async function sendPtt(
  Base64,
  chatid,
  passId,
  checkNumber = true,
  forcingReturn = false,
  delSend = true
) {
  if (typeof Base64 === 'string' && !Base64.length) {
    return WAPI.scope(chatid, true, 404, 'Audio not foud');
  }
  const chat = checkNumber
    ? await WAPI.sendExist(chatid)
    : await WAPI.returnChat(chatid);

  if (chat && chat.status != 404 && chat.id) {
    const m = { type: 'sendPtt' };

    let inChat = await WAPI.getchatId(chat.id).catch(() => {
      return WAPI.scope(chat.id, true, 404, 'Error to number ' + chatid);
    });

    if (inChat) {
      chat.lastReceivedKey && chat.lastReceivedKey._serialized
        ? (chat.lastReceivedKey._serialized = inChat._serialized)
        : '';
      chat.lastReceivedKey && chat.lastReceivedKey.id
        ? (chat.lastReceivedKey.id = inChat.id)
        : '';
    }

    const newMsgId = !passId
      ? await window.WAPI.getNewMessageId(chat.id._serialized, checkNumber)
      : await window.WAPI.setNewMessageId(passId, checkNumber);

    if (!newMsgId) {
      return WAPI.scope(chat.id, true, 404, 'Error to newId');
    }

    let result = await Store.Chat.find(chat.id)
      .then(async (chat) => {
        const mediaBlob = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.base64ToFile)(Base64);
        return await (0,_process_files__WEBPACK_IMPORTED_MODULE_0__.processFiles)(chat, mediaBlob).then(async (mc) => {
          if (typeof mc === 'object' && mc._models && mc._models[0]) {
            const media = mc._models[0];
            const enc = await WAPI.encryptAndUploadFile('ptt', mediaBlob);

            if (enc === false) {
              return WAPI.scope(
                chat.id,
                true,
                404,
                'Error to encryptAndUploadFile'
              );
            }

            const fromwWid = await Store.MaybeMeUser.getMaybeMeUser();

            const message = {
              id: newMsgId,
              ack: 0,
              from: fromwWid,
              to: chat.id,
              local: !0,
              self: 'out',
              t: parseInt(new Date().getTime() / 1000),
              isNewMsg: !0,
              invis: true,
              type: 'ptt', //media.type,
              duration: media?.__x_mediaPrep?._mediaData?.duration,
              deprecatedMms3Url: enc.url,
              directPath: enc.directPath,
              encFilehash: enc.encFilehash,
              filehash: enc.filehash,
              mediaKeyTimestamp: enc.mediaKeyTimestamp,
              mimetype: media.mimetype,
              ephemeralStartTimestamp: enc.mediaKeyTimestamp,
              mediaKey: enc.mediaKey,
              size: media.filesize
            };

            if (forcingReturn) {
              if (delSend) {
                while (true) {
                  const connection = window.Store.State.Socket.state;
                  if (connection === 'CONNECTED') {
                    const result = await window.Store.addAndSendMsgToChat(
                      chat,
                      message
                    );
                    await WAPI.sleep(5000);
                    const statusMsg = chat.msgs._models.filter(
                      (e) => e.id === newMsgId._serialized && e.ack > 0
                    );
                    if (statusMsg.length === 0) {
                      await WAPI.deleteMessages(chatid, [newMsgId._serialized]);
                    } else {
                      let obj = WAPI.scope(
                        newMsgId,
                        false,
                        WAPI._serializeForcing(result),
                        null
                      );
                      Object.assign(obj, m);
                      return obj;
                    }
                  }
                }
              } else {
                const result = await window.Store.addAndSendMsgToChat(
                  chat,
                  message
                );
                let obj = WAPI.scope(
                  newMsgId,
                  false,
                  WAPI._serializeForcing(result),
                  null
                );
                Object.assign(obj, m);
                return obj;
              }
            }

            try {
              return (
                await Promise.all(
                  window.Store.addAndSendMsgToChat(chat, message)
                )
              )[1];
            } catch (e) {
              return WAPI.scope(chat.id, true, 404, 'The message was not sent');
            }
          } else {
            return WAPI.scope(chat.id, true, 404, 'Error to models');
          }
        });
      })
      .catch((e) => {
        return WAPI.scope(chat.id, true, 404, 'Error to chat not find');
      });

    if (result.erro === false) {
      return result;
    }

    if (result === 'success' || result === 'OK') {
      let obj = WAPI.scope(newMsgId, false, result, null);
      Object.assign(obj, m);
      return obj;
    }

    if (result.erro === true) {
      return result;
    }

    let obj = WAPI.scope(newMsgId, true, result, null);
    Object.assign(obj, m);
    return obj;
  } else {
    if (!chat.erro) {
      chat.erro = true;
    }
    return chat;
  }
}


/***/ }),

/***/ "./functions/send-reactions.js":
/*!*************************************!*\
  !*** ./functions/send-reactions.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sendReactions": () => (/* binding */ sendReactions)
/* harmony export */ });
async function sendReactions(IdMessage, emoji = '🐙') {
  if (!IdMessage && IdMessage.length && typeof IdMessage === 'string') {
    return WAPI.scope(
      undefined,
      true,
      null,
      'necessary to pass the id of the message!'
    );
  }
  const checkMsg = await Store.Msg.find(IdMessage);
  if (typeof checkMsg === 'object') {
    return Store.Reactions.sendReactionToMsg(checkMsg, emoji);
  }
  return WAPI.scope(undefined, true, null, 'Message id not found!');
}


/***/ }),

/***/ "./functions/send-sticker.js":
/*!***********************************!*\
  !*** ./functions/send-sticker.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sendSticker": () => (/* binding */ sendSticker)
/* harmony export */ });
async function sendSticker(sticker, chatId, metadata, type) {
  const chat = await WAPI.sendExist(chatId);

  if (!chat.erro) {
    const newMsgId = await window.WAPI.getNewMessageId(chat.id._serialized);
    const fromwWid = await Store.MaybeMeUser.getMaybeMeUser();
    const inChat = await WAPI.getchatId(chat.id).catch(() => {
      return WAPI.scope(chat.id, true, 404, 'Error to number ' + chatId);
    });
    if (inChat) {
      chat.lastReceivedKey && chat.lastReceivedKey._serialized
        ? (chat.lastReceivedKey._serialized = inChat._serialized)
        : '';
      chat.lastReceivedKey && chat.lastReceivedKey.id
        ? (chat.lastReceivedKey.id = inChat.id)
        : '';
    }
    const message = {
      id: newMsgId,
      ack: 0,
      encFilehash: sticker.uploadhash,
      from: fromwWid,
      to: chat.id,
      local: !0,
      self: 'out',
      t: parseInt(new Date().getTime() / 1000),
      isNewMsg: !0,
      type: 'sticker',
      deprecatedMms3Url: sticker.clientUrl,
      filehash: sticker.filehash,
      mediaKey: sticker.mediaKey,
      mimetype: 'image/webp',
      height: metadata && metadata.height ? metadata.height : 512,
      width: metadata && metadata.width ? metadata.width : 512
    };

    const result = (
      await Promise.all(window.Store.addAndSendMsgToChat(chat, message))
    )[1];

    const m = { type: type };
    if (result === 'success' || result === 'OK') {
      const obj = WAPI.scope(newMsgId, false, result, null);
      Object.assign(obj, m);
      return obj;
    }
    const obj = WAPI.scope(newMsgId, true, result, null);
    Object.assign(obj, m);
    return obj;
  } else {
    return chat;
  }
}


/***/ }),

/***/ "./functions/send-type-buttons.js":
/*!****************************************!*\
  !*** ./functions/send-type-buttons.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sendTypeButtons": () => (/* binding */ sendTypeButtons)
/* harmony export */ });
async function sendTypeButtons(to, text, title, footer, hButtons) {
  const chat = await WAPI.sendExist(to);

  if (typeof text != 'string' || text.length === 0) {
    return WAPI.scope(to, true, 404, 'It is necessary to write a text!');
  }

  let b = 0;

  if (Array.isArray(hButtons) && hButtons.length > 0) {
    for (let index in hButtons) {
      if (typeof hButtons[index] !== 'function') {
        if (hButtons[index].urlButton) {
          b++;
          if (!hButtons[index].urlButton) {
            return WAPI.scope(to, true, 404, 'passed object urlButton');
          }
          if (typeof hButtons[index].urlButton !== 'object') {
            return WAPI.scope(
              to,
              true,
              404,
              'passed object value in urlButton'
            );
          }
          if (!hButtons[index].urlButton.displayText) {
            return WAPI.scope(to, true, 404, 'passed object displayText');
          }

          if (typeof hButtons[index].urlButton.displayText !== 'string') {
            return WAPI.scope(
              to,
              true,
              404,
              'passed string value in displayText'
            );
          }
          if (!hButtons[index].urlButton.url) {
            return WAPI.scope(to, true, 404, 'passed object url');
          }
          if (typeof hButtons[index].urlButton.url !== 'string') {
            return WAPI.scope(to, true, 404, 'passed string value in url');
          }
        }

        if (hButtons[index].callButton) {
          b++;
          if (!hButtons[index].callButton) {
            return WAPI.scope(to, true, 404, 'passed object callButton');
          }
          if (typeof hButtons[index].callButton !== 'object') {
            return WAPI.scope(
              to,
              true,
              404,
              'passed object value in callButton'
            );
          }
          if (!hButtons[index].callButton.displayText) {
            return WAPI.scope(to, true, 404, 'passed object displayText');
          }
          if (typeof hButtons[index].callButton.displayText !== 'string') {
            return WAPI.scope(
              to,
              true,
              404,
              'passed string value in displayText'
            );
          }
          if (!hButtons[index].callButton.phoneNumber) {
            return WAPI.scope(to, true, 404, 'passed object phoneNumber');
          }
          if (typeof hButtons[index].callButton.phoneNumber !== 'string') {
            return WAPI.scope(
              to,
              true,
              404,
              'passed string value in phoneNumber'
            );
          }
        }

        if (hButtons[index].quickReplyButton) {
          b++;
          if (!hButtons[index].quickReplyButton) {
            return WAPI.scope(to, true, 404, 'passed object quickReplyButton');
          }
          if (typeof hButtons[index].quickReplyButton !== 'object') {
            return WAPI.scope(
              to,
              true,
              404,
              'passed object value in quickReplyButton'
            );
          }
          if (!hButtons[index].quickReplyButton.displayText) {
            return WAPI.scope(to, true, 404, 'passed object displayText');
          }
          if (
            typeof hButtons[index].quickReplyButton.displayText !== 'string'
          ) {
            return WAPI.scope(
              to,
              true,
              404,
              'passed string value in displayText'
            );
          }
          if (!hButtons[index].quickReplyButton.id) {
            hButtons[index].quickReplyButton.id = `id${index}`;
          }
        }
      }
    }
  }

  if (b === 0) {
    return WAPI.scope(to, true, 404, 'button type not specified!');
  }
  if (chat && chat.status != 404 && chat.id) {
    const newMsgId = await window.WAPI.getNewMessageId(chat.id._serialized);
    const fromwWid = await Store.MaybeMeUser.getMaybeMeUser();
    const buttons = new Store.TemplateButtonCollection();
    const message = {
      from: fromwWid,
      id: newMsgId,
      ack: 0,
      to: chat.id,
      local: !0,
      self: 'out',
      isNewMsg: !0,
      t: parseInt(new Date().getTime() / 1000),
      type: 'chat',
      isQuotedMsgAvailable: true,
      isFromTemplate: true,
      footer: footer,
      body: text,
      buttons,
      __x_title: title,
      hydratedButtons: hButtons
    };

    message.buttons.add(
      message.hydratedButtons.map((e, t) => {
        const r = `${null != e.index ? e.index : t}`;
        if (e.quickReplyButton) {
          return new Store.templateButton({
            id: r,
            displayText: e.quickReplyButton.displayText,
            selectionId: e.quickReplyButton.id,
            subtype: 'quick_reply'
          });
        }
        if (e.urlButton) {
          return new Store.templateButton({
            id: r,
            displayText: e.urlButton.displayText,
            url: e.urlButton?.url,
            subtype: 'url'
          });
        }
        if (e.callButton) {
          return new Store.templateButton({
            id: r,
            displayText: e.callButton.displayText,
            phoneNumber: e.callButton.phoneNumber,
            subtype: 'call'
          });
        }
      })
    );

    var result = (
      await Promise.all(window.Store.addAndSendMsgToChat(chat, message))
    )[1];
    if (result === 'success' || result === 'OK') {
      return WAPI.scope(newMsgId, false, result, null);
    } else {
      return WAPI.scope(newMsgId, true, result, null);
    }
  } else {
    return chat;
  }
}


/***/ }),

/***/ "./functions/send-video-as-gif.js":
/*!****************************************!*\
  !*** ./functions/send-video-as-gif.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sendVideoAsGif": () => (/* binding */ sendVideoAsGif)
/* harmony export */ });
/* harmony import */ var _process_files__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./process-files */ "./functions/process-files.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper */ "./helper/index.js");



/**
 * Sends video as a gif to given chat id
 * @param {string} dataBase64
 * @param {string} chatid
 * @param {string} filename
 * @param {string} caption
 * @param {Function} done Optional callback
 */
function sendVideoAsGif(dataBase64, chatid, filename, caption, done) {
  // const idUser = new window.Store.UserConstructor(chatid);
  const idUser = new Store.WidFactory.createWid(chatid);
  return Store.Chat.find(idUser).then((chat) => {
    var mediaBlob = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.base64ToFile)(dataBase64, filename);
    (0,_process_files__WEBPACK_IMPORTED_MODULE_0__.processFiles)(chat, mediaBlob).then((mc) => {
      var media = mc.models[0];
      media.mediaPrep._mediaData.isGif = true;
      media.mediaPrep._mediaData.gifAttribution = 1;
      media.mediaPrep.sendToChat(chat, { caption: caption });
      if (done !== undefined) done(true);
    });
  });
}


/***/ }),

/***/ "./functions/sendMessageOptions.js":
/*!*****************************************!*\
  !*** ./functions/sendMessageOptions.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sendMessageOptions": () => (/* binding */ sendMessageOptions)
/* harmony export */ });
/**
 * Send message with options
 * @param {string} chatid the numberid xxx@c.us
 * @param {string} content the message
 * @param {string} options object aditionais
 */
async function sendMessageOptions(chatId, content, options = {}) {
  const chat = Store.Chat.get(chatId);
  let attOptions = {};
  if (options.attachment) {
    attOptions = await WWebJS.processMediaData(
      options.attachment,
      options.sendAudioAsVoice
    );
    content = attOptions.preview;
    delete options.attachment;
  }

  let quotedMsgOptions = {};
  if (options.quotedMessageId) {
    let quotedMessage = await WAPI.getMessageById(
      options.quotedMessageId,
      null,
      false
    );
    if (quotedMessage && quotedMessage.canReply()) {
      quotedMsgOptions = quotedMessage.msgContextInfo(chat);
    }
    delete options.quotedMessageId;
  }

  if (options.mentionedJidList) {
    options.mentionedJidList = options.mentionedJidList.map(
      (cId) => window.Store.Contact.get(cId).id
    );
  }

  let locationOptions = {};
  if (options.location) {
    locationOptions = {
      type: 'location',
      loc: options.location.description,
      lat: options.location.latitude,
      lng: options.location.longitude
    };
    delete options.location;
  }

  let vcardOptions = {};
  if (options.contactCard) {
    let contact = window.Store.Contact.get(options.contactCard);
    vcardOptions = {
      body: window.Store.VCard.vcardFromContactModel(contact).vcard,
      type: 'vcard',
      vcardFormattedName: contact.formattedName
    };
    delete options.contactCard;
  } else if (options.contactCardList) {
    let contacts = options.contactCardList.map((c) =>
      window.Store.Contact.get(c)
    );
    let vcards = contacts.map((c) =>
      window.Store.VCard.vcardFromContactModel(c)
    );
    vcardOptions = {
      type: 'multi_vcard',
      vcardList: vcards,
      body: undefined
    };
    delete options.contactCardList;
  } else if (
    options.parseVCards &&
    typeof content === 'string' &&
    content.startsWith('BEGIN:VCARD')
  ) {
    delete options.parseVCards;
    try {
      const parsed = await window.Store.VCard.parseVcard(content);
      if (parsed) {
        vcardOptions = {
          type: 'vcard',
          vcardFormattedName: await window.Store.VCard.vcardGetNameFromParsed(
            parsed
          )
        };
      }
    } catch (_) {
      // not a vcard
    }
  }

  if (options.linkPreview) {
    delete options.linkPreview;
    const link = await window.Store.Validators.findLink(content);
    if (link) {
      const preview = await window.Store.Wap2.default.queryLinkPreview(
        link.url
      );
      preview.preview = true;
      preview.subtype = 'url';
      options = { ...options, ...preview };
    }
  }
  const newMsgId = await window.WAPI.getNewMessageId(chat.id);
  const fromwWid = await Store.MaybeMeUser.getMaybeMeUser();
  const message = {
    ...options,
    id: newMsgId,
    ack: 0,
    body: content,
    from: fromwWid,
    to: chat.id,
    local: !0,
    self: 'out',
    t: parseInt(new Date().getTime() / 1000),
    isNewMsg: !0,
    type: 'chat',
    ...locationOptions,
    ...attOptions,
    ...quotedMsgOptions,
    ...vcardOptions
  };

  await window.Store.addAndSendMsgToChat(chat, message);

  return newMsgId._serialized;
}


/***/ }),

/***/ "./functions/set-group-description.js":
/*!********************************************!*\
  !*** ./functions/set-group-description.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setGroupDescription": () => (/* binding */ setGroupDescription)
/* harmony export */ });
/**
 * Parameters to change group description
 * @param {string} groupId group number
 * @param {string} description group description
 */
async function setGroupDescription(groupId, description) {
  if (typeof description != 'string' || description.length === 0) {
    return WAPI.scope(
      undefined,
      true,
      null,
      'It is necessary to write a text!'
    );
  }
  const chat = await WAPI.sendExist(groupId);
  if (chat && chat.status != 404) {
    const m = { type: 'setGroupDescription', description };
    const To = await WAPI.getchatId(chat.id);
    return Store.GroupDesc.setGroupDesc(chat, description)
      .then(() => {
        const obj = WAPI.scope(To, false, 'OK', description);
        Object.assign(obj, m);
        return obj;
      })
      .catch(() => {
        const obj = WAPI.scope(To, true, 'error', description);
        Object.assign(obj, m);
        return obj;
      });
  } else {
    return chat;
  }
}


/***/ }),

/***/ "./functions/set-group-image.js":
/*!**************************************!*\
  !*** ./functions/set-group-image.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setGroupImage": () => (/* binding */ setGroupImage)
/* harmony export */ });
/**
 * Parameters to change group image
 * @param {object} path of image
 * @param {string} groupId group number
 */
async function setGroupImage(obj, groupId) {
  const nameFunc = new Error().stack
    .match(/at (.*?) /)[1]
    .replace('Object.', '');
  if (typeof groupId !== 'string' || groupId.length === 0) {
    return WAPI.scope(groupId, true, 400, 'You must pass the group groupId!');
  }
  const chat = await WAPI.sendExist(groupId);
  if (chat && chat.status != 404) {
    groupId = new Store.WidFactory.createWid(groupId);
    let base64 = 'data:image/jpeg;base64,';
    try {
      const sendPinture = await Store.Profile.sendSetPicture(
        groupId,
        base64 + obj.b,
        base64 + obj.a
      );
      return WAPI.scope(
        groupId,
        false,
        200,
        `Image changed successfully`,
        nameFunc,
        sendPinture
      );
    } catch {
      return WAPI.scope(
        groupId,
        true,
        400,
        `Unable to change image`,
        nameFunc,
        null
      );
    }
  } else {
    return chat;
  }
}


/***/ }),

/***/ "./functions/set-group-settings.js":
/*!*****************************************!*\
  !*** ./functions/set-group-settings.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setGroupSettings": () => (/* binding */ setGroupSettings)
/* harmony export */ });
/**
 * Parameters to change group title
 * @param {string} groupId group number
 * @param {GroupSettings} settings
 * @param {boolean} value
 */
async function setGroupSettings(groupId, settings, value) {
  if (typeof settings != 'string' || settings.length === 0) {
    return WAPI.scope(
      undefined,
      true,
      null,
      'It is necessary to write a settings!'
    );
  }
  const chat = await WAPI.sendExist(groupId);
  if (chat && chat.status != 404) {
    const m = { type: 'setGroupSettings', settings };
    const To = await WAPI.getchatId(chat.id);
    const Value = { type: 'setGroupSettings', value };
    return window.Store.GroupSettings.sendSetGroupProperty(
      chat.id,
      settings,
      value
    )
      .then(() => {
        const obj = WAPI.scope(To, false, 'OK', m, Value);
        Object.assign(obj, m);
        return obj;
      })
      .catch(() => {
        const obj = WAPI.scope(To, true, 'error', m, Value);
        Object.assign(obj, m);
        return obj;
      });
  } else {
    return chat;
  }
}


/***/ }),

/***/ "./functions/set-group-title.js":
/*!**************************************!*\
  !*** ./functions/set-group-title.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setGroupTitle": () => (/* binding */ setGroupTitle)
/* harmony export */ });
/**
 * Parameters to change group title
 * @param {string} groupId group number
 * @param {string} title group name
 */
async function setGroupTitle(groupId, title) {
  if (typeof title != 'string' || title.length === 0) {
    return WAPI.scope(
      undefined,
      true,
      null,
      'It is necessary to write a text!'
    );
  }
  const chat = await WAPI.sendExist(groupId);
  if (chat && chat.status != 404) {
    const m = { type: 'setGroupTitle', title };
    const To = await WAPI.getchatId(chat.id);
    return window.Store.GroupTitle.sendSetGroupSubject(chat.id, title)
      .then(() => {
        const obj = WAPI.scope(To, false, 'OK', title);
        Object.assign(obj, m);
        return obj;
      })
      .catch(() => {
        const obj = WAPI.scope(To, true, 'error', title);
        Object.assign(obj, m);
        return obj;
      });
  } else {
    return chat;
  }
}


/***/ }),

/***/ "./functions/set-my-name.js":
/*!**********************************!*\
  !*** ./functions/set-my-name.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setMyName": () => (/* binding */ setMyName)
/* harmony export */ });
async function setMyName(name) {
  await window.Store.Perfil.setPushname(name);
}


/***/ }),

/***/ "./functions/set-my-status.js":
/*!************************************!*\
  !*** ./functions/set-my-status.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setMyStatus": () => (/* binding */ setMyStatus)
/* harmony export */ });
function setMyStatus(status) {
  return Store.MyStatus.setMyStatus(status);
}


/***/ }),

/***/ "./functions/set-new-message.js":
/*!**************************************!*\
  !*** ./functions/set-new-message.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setNewMessageId": () => (/* binding */ setNewMessageId)
/* harmony export */ });
async function setNewMessageId(info, checkNumber = true) {
  if (
    info &&
    typeof info === 'object' &&
    info.number &&
    info._serialized &&
    info.id
  ) {
    const chat = checkNumber
      ? await WAPI.sendExist(info.number)
      : await WAPI.returnChat(info.number);
    delete info.number;
    if (chat.id) {
      const newMsgId = new Object();
      newMsgId.fromMe = true;
      newMsgId.id = info.id;
      newMsgId.remote = await new Store.WidFactory.createWid(
        chat.id._serialized
      );
      newMsgId._serialized = `${newMsgId.fromMe}_${newMsgId.remote}_${newMsgId.id}`;
      const Msgkey = await new Store.MsgKey(newMsgId);
      return Msgkey;
    } else {
      return false;
    }
  } else {
    return false;
  }
}


/***/ }),

/***/ "./functions/set-presence-offline.js":
/*!*******************************************!*\
  !*** ./functions/set-presence-offline.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setPresenceOffline": () => (/* binding */ setPresenceOffline)
/* harmony export */ });
async function setPresenceOffline() {
  await Store.Presence.setPresenceUnavailable();
  return true;
}


/***/ }),

/***/ "./functions/set-presence-online.js":
/*!******************************************!*\
  !*** ./functions/set-presence-online.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setPresenceOnline": () => (/* binding */ setPresenceOnline)
/* harmony export */ });
async function setPresenceOnline() {
  await Store.Presence.setPresenceAvailable();
  return true;
}


/***/ }),

/***/ "./functions/set-profile-pic.js":
/*!**************************************!*\
  !*** ./functions/set-profile-pic.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setProfilePic": () => (/* binding */ setProfilePic)
/* harmony export */ });
async function setProfilePic(obj, id) {
  if (!id) {
    id = await Store.MaybeMeUser.getMaybeMeUser();
  } else {
    id = new Store.WidFactory.createWid(id);
  }
  let base64 = 'data:image/jpeg;base64,';
  return await Store.Profile.sendSetPicture(id, base64 + obj.b, base64 + obj.a);
}


/***/ }),

/***/ "./functions/simulate-status-chat.js":
/*!*******************************************!*\
  !*** ./functions/simulate-status-chat.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearPresence": () => (/* binding */ clearPresence),
/* harmony export */   "markPaused": () => (/* binding */ markPaused),
/* harmony export */   "presenceAvailable": () => (/* binding */ presenceAvailable),
/* harmony export */   "presenceUnavailable": () => (/* binding */ presenceUnavailable),
/* harmony export */   "startRecording": () => (/* binding */ startRecording),
/* harmony export */   "startTyping": () => (/* binding */ startTyping)
/* harmony export */ });
/**
 * Start Typing
 * @param chatId
 * @param checkNumber the number when submitting!
 */
async function startTyping(chatId, checkNumber = true) {
  const chat = checkNumber
    ? await WAPI.sendExist(chatId)
    : await WAPI.returnChat(chatId);
  if (chat && chat.status != 404 && chat.id) {
    await WAPI.presenceAvailable();
    const result = await Store.SetStatusChat.markComposing(chat);
    return WAPI.scope(undefined, false, result);
  }
  if (!chat.erro) {
    chat.erro = true;
  }
  return chat;
}

/**
 * Start Recording audio
 * @param chatId
 * @param checkNumber the number when submitting!
 */
async function startRecording(chatId, checkNumber = true) {
  const chat = checkNumber
    ? await WAPI.sendExist(chatId)
    : await WAPI.returnChat(chatId);
  if (chat && chat.status != 404 && chat.id) {
    await WAPI.presenceAvailable();
    const result = await Store.SetStatusChat.markRecording(chat);
    return WAPI.scope(undefined, false, result);
  }
  if (!chat.erro) {
    chat.erro = true;
  }
  return chat;
}

/**
 * Stop Recording audio
 * @param chatId
 * @param checkNumber the number when submitting!
 */
async function markPaused(chatId, checkNumber = true) {
  const chat = checkNumber
    ? await WAPI.sendExist(chatId)
    : await WAPI.returnChat(chatId);
  if (chat && chat.status != 404 && chat.id) {
    await WAPI.presenceAvailable();
    const result = await Store.SetStatusChat.markPaused(chat);
    return WAPI.scope(undefined, false, result);
  }
  if (!chat.erro) {
    chat.erro = true;
  }
  return chat;
}

/**
 * @param chatId
 * @param checkNumber the number when submitting!
 */
async function clearPresence(chatId, checkNumber = true) {
  const chat = checkNumber
    ? await WAPI.sendExist(chatId)
    : await WAPI.returnChat(chatId);
  if (chat && chat.status != 404 && chat.id) {
    const result = await Store.SetStatusChat.clearPresence(chat);
    return WAPI.scope(undefined, false, result);
  }
  if (!chat.erro) {
    chat.erro = true;
  }
  return chat;
}

async function presenceAvailable() {
  return await Store.SetStatusChat.sendPresenceAvailable();
}

async function presenceUnavailable() {
  return await Store.SetStatusChat.sendPresenceUnavailable();
}


/***/ }),

/***/ "./functions/theme.js":
/*!****************************!*\
  !*** ./functions/theme.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTheme": () => (/* binding */ getTheme),
/* harmony export */   "setTheme": () => (/* binding */ setTheme)
/* harmony export */ });
async function setTheme(type) {
  if (type == 'dark' || type == 'light') {
    await Store.Theme.setTheme(type);
    return true;
  } else {
    return console.error('Use type dark or light');
  }
}

async function getTheme() {
  return await Store.Theme.getTheme();
}


/***/ }),

/***/ "./functions/unblock-contact.js":
/*!**************************************!*\
  !*** ./functions/unblock-contact.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "unblockContact": () => (/* binding */ unblockContact)
/* harmony export */ });
async function unblockContact(_id) {
  if (!_id) {
    return false;
  }
  const __contact = window.Store.Contact.get(_id);
  if (__contact !== undefined) {
    await Store.Block.unblockContact(__contact);
    return true;
  } else {
    return false;
  }
}


/***/ }),

/***/ "./helper/array-buffer-to-base64.js":
/*!******************************************!*\
  !*** ./helper/array-buffer-to-base64.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "arrayBufferToBase64": () => (/* binding */ arrayBufferToBase64)
/* harmony export */ });
function arrayBufferToBase64(arrayBuffer) {
  var base64 = '';
  var encodings =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

  var bytes = new Uint8Array(arrayBuffer);
  var byteLength = bytes.byteLength;
  var byteRemainder = byteLength % 3;
  var mainLength = byteLength - byteRemainder;

  var a, b, c, d;
  var chunk;

  // Main loop deals with bytes in chunks of 3
  for (var i = 0; i < mainLength; i = i + 3) {
    // Combine the three bytes into a single integer
    chunk = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];

    // Use bitmasks to extract 6-bit segments from the triplet
    a = (chunk & 16515072) >> 18; // 16515072 = (2^6 - 1) << 18
    b = (chunk & 258048) >> 12; // 258048   = (2^6 - 1) << 12
    c = (chunk & 4032) >> 6; // 4032     = (2^6 - 1) << 6
    d = chunk & 63; // 63       = 2^6 - 1

    // Convert the raw binary segments to the appropriate ASCII encoding
    base64 += encodings[a] + encodings[b] + encodings[c] + encodings[d];
  }

  // Deal with the remaining bytes and padding
  if (byteRemainder == 1) {
    chunk = bytes[mainLength];

    a = (chunk & 252) >> 2; // 252 = (2^6 - 1) << 2

    // Set the 4 least significant bits to zero
    b = (chunk & 3) << 4; // 3   = 2^2 - 1

    base64 += encodings[a] + encodings[b] + '==';
  } else if (byteRemainder == 2) {
    chunk = (bytes[mainLength] << 8) | bytes[mainLength + 1];

    a = (chunk & 64512) >> 10; // 64512 = (2^6 - 1) << 10
    b = (chunk & 1008) >> 4; // 1008  = (2^6 - 1) << 4

    // Set the 2 least significant bits to zero
    c = (chunk & 15) << 2; // 15    = 2^4 - 1

    base64 += encodings[a] + encodings[b] + encodings[c] + '=';
  }
  return base64;
}


/***/ }),

/***/ "./helper/base64-to-file.js":
/*!**********************************!*\
  !*** ./helper/base64-to-file.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "base64ToFile": () => (/* binding */ base64ToFile)
/* harmony export */ });
function base64ToFile(base64, filename) {
  try {
    const arr = base64.split(',');
    let mime = arr[0].match(/(?:data:)?(.*?)(?:;base64)?$/i)[1];
    mime = mime.split(/\s+;\s+/).join('; '); // Fix spaces, like "audio/ogg; codecs=opus"

    const bstr = window.Base64 ? window.Base64.atob(arr[1]) : atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, {
      type: mime
    });
  } catch {
    return false;
  }
}


/***/ }),

/***/ "./helper/filter-module.js":
/*!*********************************!*\
  !*** ./helper/filter-module.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filterModule": () => (/* binding */ filterModule)
/* harmony export */ });
async function filterModule(filterObjects, modules) {
  let found = 0;
  for (let i in modules) {
    if (typeof modules[i] === 'object' && modules[i] !== null) {
      filterObjects.forEach((needObj) => {
        if (!needObj.when | needObj.yesModule) return;

        const checkObj = needObj.when(modules[i]);
        if (checkObj !== null) {
          found++;
          needObj.yesModule = checkObj;
        }
      });
      if (found == filterObjects.length) {
        break;
      }
    }
  }
  return filterObjects;
}


/***/ }),

/***/ "./helper/filter-object.js":
/*!*********************************!*\
  !*** ./helper/filter-object.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filterObjects": () => (/* binding */ filterObjects)
/* harmony export */ });
const filterObjects = [
  {
    type: 'Chat',
    when: (module) =>
      module.default && module.default.Chat && module.default.Msg
        ? module.default.Chat
        : null
  },
  {
    type: 'MaybeMeUser',
    when: (module) => (module.getMaybeMeUser ? module : null)
  },
  {
    type: 'Participants',
    when: (module) =>
      module.addParticipants && module.promoteCommunityParticipants
        ? module
        : null
  },
  {
    type: 'checkNumber',
    when: (module) => (module.queryExist ? module : null)
  },
  {
    type: 'checkNumberBeta',
    when: (module) => (module.queryPhoneExists ? module : null)
  }
];


/***/ }),

/***/ "./helper/generate-media-key.js":
/*!**************************************!*\
  !*** ./helper/generate-media-key.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateMediaKey": () => (/* binding */ generateMediaKey)
/* harmony export */ });
function generateMediaKey(length) {
  let result = '';
  let characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}


/***/ }),

/***/ "./helper/get-file-hash.js":
/*!*********************************!*\
  !*** ./helper/get-file-hash.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFileHash": () => (/* binding */ getFileHash)
/* harmony export */ });
/* harmony import */ var _jssha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jssha */ "./jssha/index.js");
/* harmony import */ var _jssha__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jssha__WEBPACK_IMPORTED_MODULE_0__);

async function getFileHash(data) {
  let buffer = await data.arrayBuffer();
  var sha = new _jssha__WEBPACK_IMPORTED_MODULE_0__('SHA-256', 'ARRAYBUFFER');
  sha.update(buffer);
  return sha.getHash('B64');
}


/***/ }),

/***/ "./helper/index.js":
/*!*************************!*\
  !*** ./helper/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "arrayBufferToBase64": () => (/* reexport safe */ _array_buffer_to_base64__WEBPACK_IMPORTED_MODULE_3__.arrayBufferToBase64),
/* harmony export */   "base64ToFile": () => (/* reexport safe */ _base64_to_file__WEBPACK_IMPORTED_MODULE_0__.base64ToFile),
/* harmony export */   "filterModule": () => (/* reexport safe */ _filter_module__WEBPACK_IMPORTED_MODULE_7__.filterModule),
/* harmony export */   "filterObjects": () => (/* reexport safe */ _filter_object__WEBPACK_IMPORTED_MODULE_6__.filterObjects),
/* harmony export */   "generateMediaKey": () => (/* reexport safe */ _generate_media_key__WEBPACK_IMPORTED_MODULE_2__.generateMediaKey),
/* harmony export */   "getFileHash": () => (/* reexport safe */ _get_file_hash__WEBPACK_IMPORTED_MODULE_1__.getFileHash),
/* harmony export */   "injectConfig": () => (/* reexport safe */ _inject_config__WEBPACK_IMPORTED_MODULE_5__.injectConfig),
/* harmony export */   "sleep": () => (/* reexport safe */ _sleep__WEBPACK_IMPORTED_MODULE_4__.sleep)
/* harmony export */ });
/* harmony import */ var _base64_to_file__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base64-to-file */ "./helper/base64-to-file.js");
/* harmony import */ var _get_file_hash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-file-hash */ "./helper/get-file-hash.js");
/* harmony import */ var _generate_media_key__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generate-media-key */ "./helper/generate-media-key.js");
/* harmony import */ var _array_buffer_to_base64__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./array-buffer-to-base64 */ "./helper/array-buffer-to-base64.js");
/* harmony import */ var _sleep__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sleep */ "./helper/sleep.js");
/* harmony import */ var _inject_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inject-config */ "./helper/inject-config.js");
/* harmony import */ var _filter_object__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filter-object */ "./helper/filter-object.js");
/* harmony import */ var _filter_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./filter-module */ "./helper/filter-module.js");











/***/ }),

/***/ "./helper/inject-config.js":
/*!*********************************!*\
  !*** ./helper/inject-config.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "injectConfig": () => (/* binding */ injectConfig)
/* harmony export */ });
const injectConfig = {
  webpack: 'webpackChunkwhatsapp_web_client',
  parasite: Math.random().toString(36).substring(7)
};


/***/ }),

/***/ "./helper/sleep.js":
/*!*************************!*\
  !*** ./helper/sleep.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sleep": () => (/* binding */ sleep)
/* harmony export */ });
function sleep(time) {
  try {
    return new Promise((resolve) => setTimeout(resolve, time));
  } catch (e) {}
}


/***/ }),

/***/ "./jssha/index.js":
/*!************************!*\
  !*** ./jssha/index.js ***!
  \************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;
(function (aa) {
  function C(e, b, a) {
    var k = 0,
      h = [],
      l = 0,
      g,
      m,
      c,
      f,
      n,
      q,
      u,
      r,
      I = !1,
      v = [],
      x = [],
      t,
      y = !1,
      z = !1,
      w = -1;
    a = a || {};
    g = a.encoding || 'UTF8';
    t = a.numRounds || 1;
    if (t !== parseInt(t, 10) || 1 > t)
      throw Error('numRounds must a integer >= 1');
    if ('SHA-1' === e)
      (n = 512),
        (q = K),
        (u = ba),
        (f = 160),
        (r = function (b) {
          return b.slice();
        });
    else if (0 === e.lastIndexOf('SHA-', 0))
      if (
        ((q = function (b, k) {
          return L(b, k, e);
        }),
        (u = function (b, k, h, a) {
          var d, f;
          if ('SHA-224' === e || 'SHA-256' === e)
            (d = (((k + 65) >>> 9) << 4) + 15), (f = 16);
          else if ('SHA-384' === e || 'SHA-512' === e)
            (d = (((k + 129) >>> 10) << 5) + 31), (f = 32);
          else throw Error('Unexpected error in SHA-2 implementation');
          for (; b.length <= d; ) b.push(0);
          b[k >>> 5] |= 128 << (24 - (k % 32));
          k = k + h;
          b[d] = k & 4294967295;
          b[d - 1] = (k / 4294967296) | 0;
          h = b.length;
          for (k = 0; k < h; k += f) a = L(b.slice(k, k + f), a, e);
          if ('SHA-224' === e) b = [a[0], a[1], a[2], a[3], a[4], a[5], a[6]];
          else if ('SHA-256' === e) b = a;
          else if ('SHA-384' === e)
            b = [
              a[0].a,
              a[0].b,
              a[1].a,
              a[1].b,
              a[2].a,
              a[2].b,
              a[3].a,
              a[3].b,
              a[4].a,
              a[4].b,
              a[5].a,
              a[5].b
            ];
          else if ('SHA-512' === e)
            b = [
              a[0].a,
              a[0].b,
              a[1].a,
              a[1].b,
              a[2].a,
              a[2].b,
              a[3].a,
              a[3].b,
              a[4].a,
              a[4].b,
              a[5].a,
              a[5].b,
              a[6].a,
              a[6].b,
              a[7].a,
              a[7].b
            ];
          else throw Error('Unexpected error in SHA-2 implementation');
          return b;
        }),
        (r = function (b) {
          return b.slice();
        }),
        'SHA-224' === e)
      )
        (n = 512), (f = 224);
      else if ('SHA-256' === e) (n = 512), (f = 256);
      else if ('SHA-384' === e) (n = 1024), (f = 384);
      else if ('SHA-512' === e) (n = 1024), (f = 512);
      else throw Error('Chosen SHA variant is not supported');
    else if (
      0 === e.lastIndexOf('SHA3-', 0) ||
      0 === e.lastIndexOf('SHAKE', 0)
    ) {
      var F = 6;
      q = D;
      r = function (b) {
        var e = [],
          a;
        for (a = 0; 5 > a; a += 1) e[a] = b[a].slice();
        return e;
      };
      w = 1;
      if ('SHA3-224' === e) (n = 1152), (f = 224);
      else if ('SHA3-256' === e) (n = 1088), (f = 256);
      else if ('SHA3-384' === e) (n = 832), (f = 384);
      else if ('SHA3-512' === e) (n = 576), (f = 512);
      else if ('SHAKE128' === e) (n = 1344), (f = -1), (F = 31), (z = !0);
      else if ('SHAKE256' === e) (n = 1088), (f = -1), (F = 31), (z = !0);
      else throw Error('Chosen SHA variant is not supported');
      u = function (b, e, a, k, h) {
        a = n;
        var d = F,
          f,
          g = [],
          l = a >>> 5,
          m = 0,
          c = e >>> 5;
        for (f = 0; f < c && e >= a; f += l)
          (k = D(b.slice(f, f + l), k)), (e -= a);
        b = b.slice(f);
        for (e %= a; b.length < l; ) b.push(0);
        f = e >>> 3;
        b[f >> 2] ^= d << ((f % 4) * 8);
        b[l - 1] ^= 2147483648;
        for (k = D(b, k); 32 * g.length < h; ) {
          b = k[m % 5][(m / 5) | 0];
          g.push(b.b);
          if (32 * g.length >= h) break;
          g.push(b.a);
          m += 1;
          0 === (64 * m) % a && D(null, k);
        }
        return g;
      };
    } else throw Error('Chosen SHA variant is not supported');
    c = M(b, g, w);
    m = A(e);
    this.setHMACKey = function (b, a, h) {
      var d;
      if (!0 === I) throw Error('HMAC key already set');
      if (!0 === y) throw Error('Cannot set HMAC key after calling update');
      if (!0 === z) throw Error('SHAKE is not supported for HMAC');
      g = (h || {}).encoding || 'UTF8';
      a = M(a, g, w)(b);
      b = a.binLen;
      a = a.value;
      d = n >>> 3;
      h = d / 4 - 1;
      if (d < b / 8) {
        for (a = u(a, b, 0, A(e), f); a.length <= h; ) a.push(0);
        a[h] &= 4294967040;
      } else if (d > b / 8) {
        for (; a.length <= h; ) a.push(0);
        a[h] &= 4294967040;
      }
      for (b = 0; b <= h; b += 1)
        (v[b] = a[b] ^ 909522486), (x[b] = a[b] ^ 1549556828);
      m = q(v, m);
      k = n;
      I = !0;
    };
    this.update = function (b) {
      var a,
        e,
        d,
        f = 0,
        g = n >>> 5;
      a = c(b, h, l);
      b = a.binLen;
      e = a.value;
      a = b >>> 5;
      for (d = 0; d < a; d += g)
        f + n <= b && ((m = q(e.slice(d, d + g), m)), (f += n));
      k += f;
      h = e.slice(f >>> 5);
      l = b % n;
      y = !0;
    };
    this.getHash = function (b, a) {
      var d, g, c, n;
      if (!0 === I) throw Error('Cannot call getHash after setting HMAC key');
      c = N(a);
      if (!0 === z) {
        if (-1 === c.shakeLen)
          throw Error('shakeLen must be specified in options');
        f = c.shakeLen;
      }
      switch (b) {
        case 'HEX':
          d = function (b) {
            return O(b, f, w, c);
          };
          break;
        case 'B64':
          d = function (b) {
            return P(b, f, w, c);
          };
          break;
        case 'BYTES':
          d = function (b) {
            return Q(b, f, w);
          };
          break;
        case 'ARRAYBUFFER':
          try {
            g = new ArrayBuffer(0);
          } catch (p) {
            throw Error('ARRAYBUFFER not supported by this environment');
          }
          d = function (b) {
            return R(b, f, w);
          };
          break;
        case 'UINT8ARRAY':
          try {
            g = new Uint8Array(0);
          } catch (p) {
            throw Error('UINT8ARRAY not supported by this environment');
          }
          d = function (b) {
            return S(b, f, w);
          };
          break;
        default:
          throw Error(
            'format must be HEX, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY'
          );
      }
      n = u(h.slice(), l, k, r(m), f);
      for (g = 1; g < t; g += 1)
        !0 === z &&
          0 !== f % 32 &&
          (n[n.length - 1] &= 16777215 >>> (24 - (f % 32))),
          (n = u(n, f, 0, A(e), f));
      return d(n);
    };
    this.getHMAC = function (b, a) {
      var d, g, c, p;
      if (!1 === I)
        throw Error('Cannot call getHMAC without first setting HMAC key');
      c = N(a);
      switch (b) {
        case 'HEX':
          d = function (b) {
            return O(b, f, w, c);
          };
          break;
        case 'B64':
          d = function (b) {
            return P(b, f, w, c);
          };
          break;
        case 'BYTES':
          d = function (b) {
            return Q(b, f, w);
          };
          break;
        case 'ARRAYBUFFER':
          try {
            d = new ArrayBuffer(0);
          } catch (v) {
            throw Error('ARRAYBUFFER not supported by this environment');
          }
          d = function (b) {
            return R(b, f, w);
          };
          break;
        case 'UINT8ARRAY':
          try {
            d = new Uint8Array(0);
          } catch (v) {
            throw Error('UINT8ARRAY not supported by this environment');
          }
          d = function (b) {
            return S(b, f, w);
          };
          break;
        default:
          throw Error(
            'outputFormat must be HEX, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY'
          );
      }
      g = u(h.slice(), l, k, r(m), f);
      p = q(x, A(e));
      p = u(g, f, n, p, f);
      return d(p);
    };
  }
  function a(a, b) {
    this.a = a;
    this.b = b;
  }
  function T(a, b, d, k) {
    var h, l, g, c, p;
    b = b || [0];
    d = d || 0;
    l = d >>> 3;
    p = -1 === k ? 3 : 0;
    for (h = 0; h < a.length; h += 1)
      (c = h + l),
        (g = c >>> 2),
        b.length <= g && b.push(0),
        (b[g] |= a[h] << (8 * (p + (c % 4) * k)));
    return { value: b, binLen: 8 * a.length + d };
  }
  function O(a, b, d, k) {
    var h = '';
    b /= 8;
    var l, g, c;
    c = -1 === d ? 3 : 0;
    for (l = 0; l < b; l += 1)
      (g = a[l >>> 2] >>> (8 * (c + (l % 4) * d))),
        (h +=
          '0123456789abcdef'.charAt((g >>> 4) & 15) +
          '0123456789abcdef'.charAt(g & 15));
    return k.outputUpper ? h.toUpperCase() : h;
  }
  function P(a, b, d, k) {
    var h = '',
      l = b / 8,
      g,
      c,
      p,
      f;
    f = -1 === d ? 3 : 0;
    for (g = 0; g < l; g += 3)
      for (
        c = g + 1 < l ? a[(g + 1) >>> 2] : 0,
          p = g + 2 < l ? a[(g + 2) >>> 2] : 0,
          p =
            (((a[g >>> 2] >>> (8 * (f + (g % 4) * d))) & 255) << 16) |
            (((c >>> (8 * (f + ((g + 1) % 4) * d))) & 255) << 8) |
            ((p >>> (8 * (f + ((g + 2) % 4) * d))) & 255),
          c = 0;
        4 > c;
        c += 1
      )
        8 * g + 6 * c <= b
          ? (h +=
              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.charAt(
                (p >>> (6 * (3 - c))) & 63
              ))
          : (h += k.b64Pad);
    return h;
  }
  function Q(a, b, d) {
    var k = '';
    b /= 8;
    var h, c, g;
    g = -1 === d ? 3 : 0;
    for (h = 0; h < b; h += 1)
      (c = (a[h >>> 2] >>> (8 * (g + (h % 4) * d))) & 255),
        (k += String.fromCharCode(c));
    return k;
  }
  function R(a, b, d) {
    b /= 8;
    var k,
      h = new ArrayBuffer(b),
      c,
      g;
    g = new Uint8Array(h);
    c = -1 === d ? 3 : 0;
    for (k = 0; k < b; k += 1)
      g[k] = (a[k >>> 2] >>> (8 * (c + (k % 4) * d))) & 255;
    return h;
  }
  function S(a, b, d) {
    b /= 8;
    var k,
      h = new Uint8Array(b),
      c;
    c = -1 === d ? 3 : 0;
    for (k = 0; k < b; k += 1)
      h[k] = (a[k >>> 2] >>> (8 * (c + (k % 4) * d))) & 255;
    return h;
  }
  function N(a) {
    var b = { outputUpper: !1, b64Pad: '=', shakeLen: -1 };
    a = a || {};
    b.outputUpper = a.outputUpper || !1;
    !0 === a.hasOwnProperty('b64Pad') && (b.b64Pad = a.b64Pad);
    if (!0 === a.hasOwnProperty('shakeLen')) {
      if (0 !== a.shakeLen % 8) throw Error('shakeLen must be a multiple of 8');
      b.shakeLen = a.shakeLen;
    }
    if ('boolean' !== typeof b.outputUpper)
      throw Error('Invalid outputUpper formatting option');
    if ('string' !== typeof b.b64Pad)
      throw Error('Invalid b64Pad formatting option');
    return b;
  }
  function M(a, b, d) {
    switch (b) {
      case 'UTF8':
      case 'UTF16BE':
      case 'UTF16LE':
        break;
      default:
        throw Error('encoding must be UTF8, UTF16BE, or UTF16LE');
    }
    switch (a) {
      case 'HEX':
        a = function (b, a, e) {
          var g = b.length,
            c,
            p,
            f,
            n,
            q,
            u;
          if (0 !== g % 2)
            throw Error('String of HEX type must be in byte increments');
          a = a || [0];
          e = e || 0;
          q = e >>> 3;
          u = -1 === d ? 3 : 0;
          for (c = 0; c < g; c += 2) {
            p = parseInt(b.substr(c, 2), 16);
            if (isNaN(p))
              throw Error('String of HEX type contains invalid characters');
            n = (c >>> 1) + q;
            for (f = n >>> 2; a.length <= f; ) a.push(0);
            a[f] |= p << (8 * (u + (n % 4) * d));
          }
          return { value: a, binLen: 4 * g + e };
        };
        break;
      case 'TEXT':
        a = function (a, e, c) {
          var g,
            m,
            p = 0,
            f,
            n,
            q,
            u,
            r,
            t;
          e = e || [0];
          c = c || 0;
          q = c >>> 3;
          if ('UTF8' === b)
            for (t = -1 === d ? 3 : 0, f = 0; f < a.length; f += 1)
              for (
                g = a.charCodeAt(f),
                  m = [],
                  128 > g
                    ? m.push(g)
                    : 2048 > g
                    ? (m.push(192 | (g >>> 6)), m.push(128 | (g & 63)))
                    : 55296 > g || 57344 <= g
                    ? m.push(
                        224 | (g >>> 12),
                        128 | ((g >>> 6) & 63),
                        128 | (g & 63)
                      )
                    : ((f += 1),
                      (g =
                        65536 +
                        (((g & 1023) << 10) | (a.charCodeAt(f) & 1023))),
                      m.push(
                        240 | (g >>> 18),
                        128 | ((g >>> 12) & 63),
                        128 | ((g >>> 6) & 63),
                        128 | (g & 63)
                      )),
                  n = 0;
                n < m.length;
                n += 1
              ) {
                r = p + q;
                for (u = r >>> 2; e.length <= u; ) e.push(0);
                e[u] |= m[n] << (8 * (t + (r % 4) * d));
                p += 1;
              }
          else if ('UTF16BE' === b || 'UTF16LE' === b)
            for (
              t = -1 === d ? 2 : 0,
                m =
                  ('UTF16LE' === b && 1 !== d) || ('UTF16LE' !== b && 1 === d),
                f = 0;
              f < a.length;
              f += 1
            ) {
              g = a.charCodeAt(f);
              !0 === m && ((n = g & 255), (g = (n << 8) | (g >>> 8)));
              r = p + q;
              for (u = r >>> 2; e.length <= u; ) e.push(0);
              e[u] |= g << (8 * (t + (r % 4) * d));
              p += 2;
            }
          return { value: e, binLen: 8 * p + c };
        };
        break;
      case 'B64':
        a = function (b, a, e) {
          var c = 0,
            m,
            p,
            f,
            n,
            q,
            u,
            r,
            t;
          if (-1 === b.search(/^[a-zA-Z0-9=+\/]+$/))
            throw Error('Invalid character in base-64 string');
          p = b.indexOf('=');
          b = b.replace(/\=/g, '');
          if (-1 !== p && p < b.length)
            throw Error("Invalid '=' found in base-64 string");
          a = a || [0];
          e = e || 0;
          u = e >>> 3;
          t = -1 === d ? 3 : 0;
          for (p = 0; p < b.length; p += 4) {
            q = b.substr(p, 4);
            for (f = n = 0; f < q.length; f += 1)
              (m =
                'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.indexOf(
                  q.charAt(f)
                )),
                (n |= m << (18 - 6 * f));
            for (f = 0; f < q.length - 1; f += 1) {
              r = c + u;
              for (m = r >>> 2; a.length <= m; ) a.push(0);
              a[m] |= ((n >>> (16 - 8 * f)) & 255) << (8 * (t + (r % 4) * d));
              c += 1;
            }
          }
          return { value: a, binLen: 8 * c + e };
        };
        break;
      case 'BYTES':
        a = function (b, a, e) {
          var c, m, p, f, n, q;
          a = a || [0];
          e = e || 0;
          p = e >>> 3;
          q = -1 === d ? 3 : 0;
          for (m = 0; m < b.length; m += 1)
            (c = b.charCodeAt(m)),
              (n = m + p),
              (f = n >>> 2),
              a.length <= f && a.push(0),
              (a[f] |= c << (8 * (q + (n % 4) * d)));
          return { value: a, binLen: 8 * b.length + e };
        };
        break;
      case 'ARRAYBUFFER':
        try {
          a = new ArrayBuffer(0);
        } catch (k) {
          throw Error('ARRAYBUFFER not supported by this environment');
        }
        a = function (b, a, e) {
          return T(new Uint8Array(b), a, e, d);
        };
        break;
      case 'UINT8ARRAY':
        try {
          a = new Uint8Array(0);
        } catch (k) {
          throw Error('UINT8ARRAY not supported by this environment');
        }
        a = function (b, a, e) {
          return T(b, a, e, d);
        };
        break;
      default:
        throw Error(
          'format must be HEX, TEXT, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY'
        );
    }
    return a;
  }
  function y(a, b) {
    return (a << b) | (a >>> (32 - b));
  }
  function U(e, b) {
    return 32 < b
      ? ((b -= 32),
        new a((e.b << b) | (e.a >>> (32 - b)), (e.a << b) | (e.b >>> (32 - b))))
      : 0 !== b
      ? new a((e.a << b) | (e.b >>> (32 - b)), (e.b << b) | (e.a >>> (32 - b)))
      : e;
  }
  function x(a, b) {
    return (a >>> b) | (a << (32 - b));
  }
  function t(e, b) {
    var d = null,
      d = new a(e.a, e.b);
    return (d =
      32 >= b
        ? new a(
            (d.a >>> b) | ((d.b << (32 - b)) & 4294967295),
            (d.b >>> b) | ((d.a << (32 - b)) & 4294967295)
          )
        : new a(
            (d.b >>> (b - 32)) | ((d.a << (64 - b)) & 4294967295),
            (d.a >>> (b - 32)) | ((d.b << (64 - b)) & 4294967295)
          ));
  }
  function V(e, b) {
    var d = null;
    return (d =
      32 >= b
        ? new a(e.a >>> b, (e.b >>> b) | ((e.a << (32 - b)) & 4294967295))
        : new a(0, e.a >>> (b - 32)));
  }
  function ca(a, b, d) {
    return (a & b) ^ (~a & d);
  }
  function da(e, b, d) {
    return new a((e.a & b.a) ^ (~e.a & d.a), (e.b & b.b) ^ (~e.b & d.b));
  }
  function W(a, b, d) {
    return (a & b) ^ (a & d) ^ (b & d);
  }
  function ea(e, b, d) {
    return new a(
      (e.a & b.a) ^ (e.a & d.a) ^ (b.a & d.a),
      (e.b & b.b) ^ (e.b & d.b) ^ (b.b & d.b)
    );
  }
  function fa(a) {
    return x(a, 2) ^ x(a, 13) ^ x(a, 22);
  }
  function ga(e) {
    var b = t(e, 28),
      d = t(e, 34);
    e = t(e, 39);
    return new a(b.a ^ d.a ^ e.a, b.b ^ d.b ^ e.b);
  }
  function ha(a) {
    return x(a, 6) ^ x(a, 11) ^ x(a, 25);
  }
  function ia(e) {
    var b = t(e, 14),
      d = t(e, 18);
    e = t(e, 41);
    return new a(b.a ^ d.a ^ e.a, b.b ^ d.b ^ e.b);
  }
  function ja(a) {
    return x(a, 7) ^ x(a, 18) ^ (a >>> 3);
  }
  function ka(e) {
    var b = t(e, 1),
      d = t(e, 8);
    e = V(e, 7);
    return new a(b.a ^ d.a ^ e.a, b.b ^ d.b ^ e.b);
  }
  function la(a) {
    return x(a, 17) ^ x(a, 19) ^ (a >>> 10);
  }
  function ma(e) {
    var b = t(e, 19),
      d = t(e, 61);
    e = V(e, 6);
    return new a(b.a ^ d.a ^ e.a, b.b ^ d.b ^ e.b);
  }
  function G(a, b) {
    var d = (a & 65535) + (b & 65535);
    return (
      ((((a >>> 16) + (b >>> 16) + (d >>> 16)) & 65535) << 16) | (d & 65535)
    );
  }
  function na(a, b, d, k) {
    var h = (a & 65535) + (b & 65535) + (d & 65535) + (k & 65535);
    return (
      ((((a >>> 16) + (b >>> 16) + (d >>> 16) + (k >>> 16) + (h >>> 16)) &
        65535) <<
        16) |
      (h & 65535)
    );
  }
  function H(a, b, d, k, h) {
    var c = (a & 65535) + (b & 65535) + (d & 65535) + (k & 65535) + (h & 65535);
    return (
      ((((a >>> 16) +
        (b >>> 16) +
        (d >>> 16) +
        (k >>> 16) +
        (h >>> 16) +
        (c >>> 16)) &
        65535) <<
        16) |
      (c & 65535)
    );
  }
  function oa(e, b) {
    var d, k, c;
    d = (e.b & 65535) + (b.b & 65535);
    k = (e.b >>> 16) + (b.b >>> 16) + (d >>> 16);
    c = ((k & 65535) << 16) | (d & 65535);
    d = (e.a & 65535) + (b.a & 65535) + (k >>> 16);
    k = (e.a >>> 16) + (b.a >>> 16) + (d >>> 16);
    return new a(((k & 65535) << 16) | (d & 65535), c);
  }
  function pa(e, b, d, k) {
    var c, l, g;
    c = (e.b & 65535) + (b.b & 65535) + (d.b & 65535) + (k.b & 65535);
    l = (e.b >>> 16) + (b.b >>> 16) + (d.b >>> 16) + (k.b >>> 16) + (c >>> 16);
    g = ((l & 65535) << 16) | (c & 65535);
    c =
      (e.a & 65535) +
      (b.a & 65535) +
      (d.a & 65535) +
      (k.a & 65535) +
      (l >>> 16);
    l = (e.a >>> 16) + (b.a >>> 16) + (d.a >>> 16) + (k.a >>> 16) + (c >>> 16);
    return new a(((l & 65535) << 16) | (c & 65535), g);
  }
  function qa(e, b, d, k, c) {
    var l, g, m;
    l =
      (e.b & 65535) +
      (b.b & 65535) +
      (d.b & 65535) +
      (k.b & 65535) +
      (c.b & 65535);
    g =
      (e.b >>> 16) +
      (b.b >>> 16) +
      (d.b >>> 16) +
      (k.b >>> 16) +
      (c.b >>> 16) +
      (l >>> 16);
    m = ((g & 65535) << 16) | (l & 65535);
    l =
      (e.a & 65535) +
      (b.a & 65535) +
      (d.a & 65535) +
      (k.a & 65535) +
      (c.a & 65535) +
      (g >>> 16);
    g =
      (e.a >>> 16) +
      (b.a >>> 16) +
      (d.a >>> 16) +
      (k.a >>> 16) +
      (c.a >>> 16) +
      (l >>> 16);
    return new a(((g & 65535) << 16) | (l & 65535), m);
  }
  function B(e, b) {
    return new a(e.a ^ b.a, e.b ^ b.b);
  }
  function A(e) {
    var b = [],
      d;
    if ('SHA-1' === e)
      b = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
    else if (0 === e.lastIndexOf('SHA-', 0))
      switch (
        ((b = [
          3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025,
          1694076839, 3204075428
        ]),
        (d = [
          1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
          2600822924, 528734635, 1541459225
        ]),
        e)
      ) {
        case 'SHA-224':
          break;
        case 'SHA-256':
          b = d;
          break;
        case 'SHA-384':
          b = [
            new a(3418070365, b[0]),
            new a(1654270250, b[1]),
            new a(2438529370, b[2]),
            new a(355462360, b[3]),
            new a(1731405415, b[4]),
            new a(41048885895, b[5]),
            new a(3675008525, b[6]),
            new a(1203062813, b[7])
          ];
          break;
        case 'SHA-512':
          b = [
            new a(d[0], 4089235720),
            new a(d[1], 2227873595),
            new a(d[2], 4271175723),
            new a(d[3], 1595750129),
            new a(d[4], 2917565137),
            new a(d[5], 725511199),
            new a(d[6], 4215389547),
            new a(d[7], 327033209)
          ];
          break;
        default:
          throw Error('Unknown SHA variant');
      }
    else if (0 === e.lastIndexOf('SHA3-', 0) || 0 === e.lastIndexOf('SHAKE', 0))
      for (e = 0; 5 > e; e += 1)
        b[e] = [
          new a(0, 0),
          new a(0, 0),
          new a(0, 0),
          new a(0, 0),
          new a(0, 0)
        ];
    else throw Error('No SHA variants supported');
    return b;
  }
  function K(a, b) {
    var d = [],
      k,
      c,
      l,
      g,
      m,
      p,
      f;
    k = b[0];
    c = b[1];
    l = b[2];
    g = b[3];
    m = b[4];
    for (f = 0; 80 > f; f += 1)
      (d[f] =
        16 > f ? a[f] : y(d[f - 3] ^ d[f - 8] ^ d[f - 14] ^ d[f - 16], 1)),
        (p =
          20 > f
            ? H(y(k, 5), (c & l) ^ (~c & g), m, 1518500249, d[f])
            : 40 > f
            ? H(y(k, 5), c ^ l ^ g, m, 1859775393, d[f])
            : 60 > f
            ? H(y(k, 5), W(c, l, g), m, 2400959708, d[f])
            : H(y(k, 5), c ^ l ^ g, m, 3395469782, d[f])),
        (m = g),
        (g = l),
        (l = y(c, 30)),
        (c = k),
        (k = p);
    b[0] = G(k, b[0]);
    b[1] = G(c, b[1]);
    b[2] = G(l, b[2]);
    b[3] = G(g, b[3]);
    b[4] = G(m, b[4]);
    return b;
  }
  function ba(a, b, d, c) {
    var h;
    for (h = (((b + 65) >>> 9) << 4) + 15; a.length <= h; ) a.push(0);
    a[b >>> 5] |= 128 << (24 - (b % 32));
    b += d;
    a[h] = b & 4294967295;
    a[h - 1] = (b / 4294967296) | 0;
    b = a.length;
    for (h = 0; h < b; h += 16) c = K(a.slice(h, h + 16), c);
    return c;
  }
  function L(e, b, d) {
    var k,
      h,
      l,
      g,
      m,
      p,
      f,
      n,
      q,
      u,
      r,
      t,
      v,
      x,
      y,
      A,
      z,
      w,
      F,
      B,
      C,
      D,
      E = [],
      J;
    if ('SHA-224' === d || 'SHA-256' === d)
      (u = 64),
        (t = 1),
        (D = Number),
        (v = G),
        (x = na),
        (y = H),
        (A = ja),
        (z = la),
        (w = fa),
        (F = ha),
        (C = W),
        (B = ca),
        (J = c);
    else if ('SHA-384' === d || 'SHA-512' === d)
      (u = 80),
        (t = 2),
        (D = a),
        (v = oa),
        (x = pa),
        (y = qa),
        (A = ka),
        (z = ma),
        (w = ga),
        (F = ia),
        (C = ea),
        (B = da),
        (J = X);
    else throw Error('Unexpected error in SHA-2 implementation');
    d = b[0];
    k = b[1];
    h = b[2];
    l = b[3];
    g = b[4];
    m = b[5];
    p = b[6];
    f = b[7];
    for (r = 0; r < u; r += 1)
      16 > r
        ? ((q = r * t),
          (n = e.length <= q ? 0 : e[q]),
          (q = e.length <= q + 1 ? 0 : e[q + 1]),
          (E[r] = new D(n, q)))
        : (E[r] = x(z(E[r - 2]), E[r - 7], A(E[r - 15]), E[r - 16])),
        (n = y(f, F(g), B(g, m, p), J[r], E[r])),
        (q = v(w(d), C(d, k, h))),
        (f = p),
        (p = m),
        (m = g),
        (g = v(l, n)),
        (l = h),
        (h = k),
        (k = d),
        (d = v(n, q));
    b[0] = v(d, b[0]);
    b[1] = v(k, b[1]);
    b[2] = v(h, b[2]);
    b[3] = v(l, b[3]);
    b[4] = v(g, b[4]);
    b[5] = v(m, b[5]);
    b[6] = v(p, b[6]);
    b[7] = v(f, b[7]);
    return b;
  }
  function D(e, b) {
    var d,
      c,
      h,
      l,
      g = [],
      m = [];
    if (null !== e)
      for (c = 0; c < e.length; c += 2)
        b[(c >>> 1) % 5][((c >>> 1) / 5) | 0] = B(
          b[(c >>> 1) % 5][((c >>> 1) / 5) | 0],
          new a(e[c + 1], e[c])
        );
    for (d = 0; 24 > d; d += 1) {
      l = A('SHA3-');
      for (c = 0; 5 > c; c += 1) {
        h = b[c][0];
        var p = b[c][1],
          f = b[c][2],
          n = b[c][3],
          q = b[c][4];
        g[c] = new a(h.a ^ p.a ^ f.a ^ n.a ^ q.a, h.b ^ p.b ^ f.b ^ n.b ^ q.b);
      }
      for (c = 0; 5 > c; c += 1) m[c] = B(g[(c + 4) % 5], U(g[(c + 1) % 5], 1));
      for (c = 0; 5 > c; c += 1)
        for (h = 0; 5 > h; h += 1) b[c][h] = B(b[c][h], m[c]);
      for (c = 0; 5 > c; c += 1)
        for (h = 0; 5 > h; h += 1)
          l[h][(2 * c + 3 * h) % 5] = U(b[c][h], Y[c][h]);
      for (c = 0; 5 > c; c += 1)
        for (h = 0; 5 > h; h += 1)
          b[c][h] = B(
            l[c][h],
            new a(
              ~l[(c + 1) % 5][h].a & l[(c + 2) % 5][h].a,
              ~l[(c + 1) % 5][h].b & l[(c + 2) % 5][h].b
            )
          );
      b[0][0] = B(b[0][0], Z[d]);
    }
    return b;
  }
  var c, X, Y, Z;
  c = [
    1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
    2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
    1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
    264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
    2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
    113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
    1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
    3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
    430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
    1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
    2428436474, 2756734187, 3204031479, 3329325298
  ];
  X = [
    new a(c[0], 3609767458),
    new a(c[1], 602891725),
    new a(c[2], 3964484399),
    new a(c[3], 2173295548),
    new a(c[4], 4081628472),
    new a(c[5], 3053834265),
    new a(c[6], 2937671579),
    new a(c[7], 3664609560),
    new a(c[8], 2734883394),
    new a(c[9], 1164996542),
    new a(c[10], 1323610764),
    new a(c[11], 3590304994),
    new a(c[12], 4068182383),
    new a(c[13], 991336113),
    new a(c[14], 633803317),
    new a(c[15], 3479774868),
    new a(c[16], 2666613458),
    new a(c[17], 944711139),
    new a(c[18], 2341262773),
    new a(c[19], 2007800933),
    new a(c[20], 1495990901),
    new a(c[21], 1856431235),
    new a(c[22], 3175218132),
    new a(c[23], 2198950837),
    new a(c[24], 3999719339),
    new a(c[25], 766784016),
    new a(c[26], 2566594879),
    new a(c[27], 3203337956),
    new a(c[28], 1034457026),
    new a(c[29], 2466948901),
    new a(c[30], 3758326383),
    new a(c[31], 168717936),
    new a(c[32], 1188179964),
    new a(c[33], 1546045734),
    new a(c[34], 1522805485),
    new a(c[35], 2643833823),
    new a(c[36], 2343527390),
    new a(c[37], 1014477480),
    new a(c[38], 1206759142),
    new a(c[39], 344077627),
    new a(c[40], 1290863460),
    new a(c[41], 3158454273),
    new a(c[42], 3505952657),
    new a(c[43], 106217008),
    new a(c[44], 3606008344),
    new a(c[45], 1432725776),
    new a(c[46], 1467031594),
    new a(c[47], 851169720),
    new a(c[48], 3100823752),
    new a(c[49], 1363258195),
    new a(c[50], 3750685593),
    new a(c[51], 3785050280),
    new a(c[52], 3318307427),
    new a(c[53], 3812723403),
    new a(c[54], 2003034995),
    new a(c[55], 3602036899),
    new a(c[56], 1575990012),
    new a(c[57], 1125592928),
    new a(c[58], 2716904306),
    new a(c[59], 442776044),
    new a(c[60], 593698344),
    new a(c[61], 3733110249),
    new a(c[62], 2999351573),
    new a(c[63], 3815920427),
    new a(3391569614, 3928383900),
    new a(3515267271, 566280711),
    new a(3940187606, 3454069534),
    new a(4118630271, 4000239992),
    new a(116418474, 1914138554),
    new a(174292421, 2731055270),
    new a(289380356, 3203993006),
    new a(460393269, 320620315),
    new a(685471733, 587496836),
    new a(852142971, 1086792851),
    new a(1017036298, 365543100),
    new a(1126000580, 2618297676),
    new a(1288033470, 3409855158),
    new a(1501505948, 4234509866),
    new a(1607167915, 987167468),
    new a(1816402316, 1246189591)
  ];
  Z = [
    new a(0, 1),
    new a(0, 32898),
    new a(2147483648, 32906),
    new a(2147483648, 2147516416),
    new a(0, 32907),
    new a(0, 2147483649),
    new a(2147483648, 2147516545),
    new a(2147483648, 32777),
    new a(0, 138),
    new a(0, 136),
    new a(0, 2147516425),
    new a(0, 2147483658),
    new a(0, 2147516555),
    new a(2147483648, 139),
    new a(2147483648, 32905),
    new a(2147483648, 32771),
    new a(2147483648, 32770),
    new a(2147483648, 128),
    new a(0, 32778),
    new a(2147483648, 2147483658),
    new a(2147483648, 2147516545),
    new a(2147483648, 32896),
    new a(0, 2147483649),
    new a(2147483648, 2147516424)
  ];
  Y = [
    [0, 36, 3, 41, 18],
    [1, 44, 10, 45, 2],
    [62, 6, 43, 15, 61],
    [28, 55, 25, 21, 56],
    [27, 20, 39, 8, 14]
  ];
   true
    ? !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
        return C;
      }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
    : 0;
})(this);


/***/ }),

/***/ "./listeners/add-new-messages.js":
/*!***************************************!*\
  !*** ./listeners/add-new-messages.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addNewMessagesListener": () => (/* binding */ addNewMessagesListener)
/* harmony export */ });
function addNewMessagesListener() {
  window.WAPI.waitNewMessages = waitNewMessages;
}

/**
 * Registers a callback to be called when a new message arrives the WAPI.
 * @param rmCallbackAfterUse - Boolean - Specify if the callback need to be executed only once
 * @param done - function - Callback function to be called when a new message arrives.
 * @returns {boolean}
 */
function waitNewMessages(rmCallbackAfterUse = true, done) {
  window.WAPI._newMessagesCallbacks.push({
    callback: (e) => {
      done(e);
    },
    rmAfterUse: rmCallbackAfterUse
  });
  return true;
}


/***/ }),

/***/ "./listeners/add-on-added-to-group.js":
/*!********************************************!*\
  !*** ./listeners/add-on-added-to-group.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addOnAddedToGroup": () => (/* binding */ addOnAddedToGroup)
/* harmony export */ });
function addOnAddedToGroup() {
  /**
   * Registers a callback that fires when your host phone is added to a group.
   * @param callback - function - Callback function to be called when a message acknowledgement changes. The callback returns 3 variables
   * @returns {boolean}
   */
  window.WAPI.onAddedToGroup = function (callback) {
    window.WAPI.waitForStore(['Chat', 'Msg'], () => {
      Store.Chat.on('add', (chatObject) => {
        if (chatObject && chatObject.isGroup) {
          callback(chatObject);
        }
      });
    });
    return true;
  };
}


/***/ }),

/***/ "./listeners/add-on-chatstate-change.js":
/*!**********************************************!*\
  !*** ./listeners/add-on-chatstate-change.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addonChatState": () => (/* binding */ addonChatState)
/* harmony export */ });
function addonChatState() {
  window.WAPI.onChatState = function (callback) {
    window.WAPI.waitForStore(['Chat'], () => {
      Store.Chat.on('change:presence.chatstate.type', (e) => {
        const event = e._events.all[0].context;
        const obj = {
          id: event.id,
          isGroup: event.isGroup,
          isUser: event.isUser,
          type: e.type
        };
        callback(obj);
      });
    });
    return true;
  };
}


/***/ }),

/***/ "./listeners/add-on-live-location.js":
/*!*******************************************!*\
  !*** ./listeners/add-on-live-location.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addOnLiveLocation": () => (/* binding */ addOnLiveLocation)
/* harmony export */ });
function addOnLiveLocation() {
  window.WAPI.onLiveLocation = async function (chatId, callback) {
    return await window.WAPI.waitForStore(['LiveLocation'], () => {
      var lLChat = Store.LiveLocation.get(chatId);
      if (lLChat) {
        var validLocs = lLChat.participants.validLocations();
        validLocs.map((x) =>
          x.on('change:lastUpdated', (x, y, z) => {
            console.log(x, y, z);
            const { id, lat, lng, accuracy, degrees, speed, lastUpdated } = x;
            const l = {
              id: id.toString(),
              lat,
              lng,
              accuracy,
              degrees,
              speed,
              lastUpdated
            };
            // console.log('newloc',l)
            callback(l);
          })
        );
        return true;
      } else {
        return false;
      }
    });
  };
}


/***/ }),

/***/ "./listeners/add-on-new-ack.js":
/*!*************************************!*\
  !*** ./listeners/add-on-new-ack.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addOnNewAcks": () => (/* binding */ addOnNewAcks)
/* harmony export */ });
function addOnNewAcks() {
  window.WAPI.onAck = function (callback) {
    window.WAPI.waitForStore(['Chat', 'Msg'], () => {
      Store.Msg.on('change:ack', (e) => {
        callback(e);
      });
    });
    return true;
  };
}


/***/ }),

/***/ "./listeners/add-on-participants-change.js":
/*!*************************************************!*\
  !*** ./listeners/add-on-participants-change.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addOnParticipantsChange": () => (/* binding */ addOnParticipantsChange)
/* harmony export */ });
let groupParticpiantsEvents = {};

/**
 * Registers on participants change listener
 */
function addOnParticipantsChange() {
  /**
   * Registers a callback to participant changes on a certain, specific group
   * @param groupId - string - The id of the group that you want to attach the callback to.
   * @param callback - function - Callback function to be called when a message acknowledgement changes. The callback returns 3 variables
   * @returns {boolean}
   */
  window.WAPI.onParticipantsChanged = async function (groupId, callback) {
    return await window.WAPI.waitForStore(['Chat', 'Msg'], () => {
      const subtypeEvents = [
        'invite',
        'add',
        'remove',
        'leave',
        'promote',
        'demote'
      ];
      const chat = window.Store.Chat.get(groupId);
      //attach all group Participants to the events object as 'add'
      const metadata = window.Store.GroupMetadata.get(groupId);
      if (!groupParticpiantsEvents[groupId]) {
        groupParticpiantsEvents[groupId] = {};
        metadata.participants.forEach((participant) => {
          groupParticpiantsEvents[groupId][participant.id.toString()] = {
            subtype: 'add',
            from: metadata.owner
          };
        });
      }
      let i = 0;
      chat.on('change:groupMetadata.participants', (_) =>
        chat.on('all', (x, y) => {
          const { isGroup, previewMessage } = y;
          if (
            isGroup &&
            x === 'change' &&
            previewMessage &&
            previewMessage.type === 'gp2' &&
            subtypeEvents.includes(previewMessage.subtype)
          ) {
            const { subtype, from, recipients } = previewMessage;
            const rec = recipients[0].toString();
            if (
              groupParticpiantsEvents[groupId][rec] &&
              groupParticpiantsEvents[groupId][recipients[0]].subtype == subtype
            ) {
              //ignore, this is a duplicate entry
              // console.log('duplicate event')
            } else {
              //ignore the first message
              if (i == 0) {
                //ignore it, plus 1,
                i++;
              } else {
                groupParticpiantsEvents[groupId][rec] = {
                  subtype,
                  from
                };
                //fire the callback
                // // previewMessage.from.toString()
                // x removed y
                // x added y
                callback({
                  by: from.toString(),
                  action: subtype,
                  who: recipients
                });
                chat.off('all', this);
                i = 0;
              }
            }
          }
        })
      );
      return true;
    });
  };
}


/***/ }),

/***/ "./listeners/add-on-pictumb-change.js":
/*!********************************************!*\
  !*** ./listeners/add-on-pictumb-change.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addonFilePicThumb": () => (/* binding */ addonFilePicThumb)
/* harmony export */ });
function addonFilePicThumb() {
  window.WAPI.onFilePicThumb = function (callback) {
    Store.ProfilePicThumb.on('change:img', (e) => {
      const obj = {
        attributes: e.attributes,
        eurl: e.eurl,
        eurlStale: e.eurlStale,
        fallbackType: e.fallbackType,
        id: e.id,
        img: e.img,
        imgFull: e.imgFull,
        isState: e.isState,
        pendingPic: e.pendingPic,
        raw: e.raw,
        stale: e.stale,
        tag: e.tag,
        token: e.token
      };
      callback(obj);
    });

    return true;
  };
}


/***/ }),

/***/ "./listeners/add-on-poll.js":
/*!**********************************!*\
  !*** ./listeners/add-on-poll.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addOnPoll": () => (/* binding */ addOnPoll)
/* harmony export */ });
function addOnPoll() {
  window.WAPI.onPoll = function (callback) {
    Store.PollVote.on('change', (e) => {
      callback(e);
    });
    return true;
  };
}


/***/ }),

/***/ "./listeners/add-on-state-change.js":
/*!******************************************!*\
  !*** ./listeners/add-on-state-change.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addOnStateChange": () => (/* binding */ addOnStateChange),
/* harmony export */   "addOnStreamChange": () => (/* binding */ addOnStreamChange)
/* harmony export */ });
function addOnStateChange() {
  let initialized = false;
  const getData = () => {
    return window.Store.State.Socket.state;
  };

  window.WAPI.onStateChange = function (callback) {
    window.WAPI.waitForStore('State', () => {
      window.Store.State.Socket.on('change:state', () => callback(getData()));
      if (!initialized) {
        initialized = true;
        callback(getData());
      }
    });
    return true;
  };
}

function addOnStreamChange() {
  let initialized = false;
  let getData = () => {
    return window.Store.State.Socket.stream;
  };

  window.WAPI.onStreamChange = function (callback) {
    window.WAPI.waitForStore('State', () => {
      window.Store.State.Socket.on('change:stream', () => callback(getData()));
      if (!initialized) {
        initialized = true;
        callback(getData());
      }
    });
    return true;
  };
}


/***/ }),

/***/ "./listeners/add-on-stream.js":
/*!************************************!*\
  !*** ./listeners/add-on-stream.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addOnStream": () => (/* binding */ addOnStream)
/* harmony export */ });
function addOnStream() {
  let initialized = false;
  const getData = () => {
    return {
      displayInfo: window.Store.Stream.displayInfo,
      mode: window.Store.Stream.mode,
      info: window.Store.Stream.info
    };
  };

  window.WAPI.onInterfaceChange = (callback) => {
    window.WAPI.waitForStore('Stream', () => {
      window.Store.Stream.on('change:info change:displayInfo change:mode', () =>
        callback(getData())
      );
      if (initialized === false) {
        initialized = true;
        callback(getData());
      }
    });
    return true;
  };
}


/***/ }),

/***/ "./listeners/add-unread-message.js":
/*!*****************************************!*\
  !*** ./listeners/add-unread-message.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addonUnreadMessage": () => (/* binding */ addonUnreadMessage)
/* harmony export */ });
function addonUnreadMessage() {
  window.WAPI.onUnreadMessage = function (callback) {
    Store.Chat.on('change:unreadCount', async (e) => {
      if (e.unreadCount > 0) {
        let arr = [];
        let t = e.msgs._models.slice(-e.unreadCount);
        for (let r in t) {
          let message = await WAPI.processMessageObj(t[r], true, true);
          if (message) {
            arr.push(message);
          }
        }
        callback(arr);
      }
    });
    return true;
  };
}


/***/ }),

/***/ "./listeners/index.js":
/*!****************************!*\
  !*** ./listeners/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addNewMessagesListener": () => (/* reexport safe */ _add_new_messages__WEBPACK_IMPORTED_MODULE_1__.addNewMessagesListener),
/* harmony export */   "addOnAddedToGroup": () => (/* reexport safe */ _add_on_added_to_group__WEBPACK_IMPORTED_MODULE_6__.addOnAddedToGroup),
/* harmony export */   "addOnLiveLocation": () => (/* reexport safe */ _add_on_live_location__WEBPACK_IMPORTED_MODULE_4__.addOnLiveLocation),
/* harmony export */   "addOnNewAcks": () => (/* reexport safe */ _add_on_new_ack__WEBPACK_IMPORTED_MODULE_3__.addOnNewAcks),
/* harmony export */   "addOnParticipantsChange": () => (/* reexport safe */ _add_on_participants_change__WEBPACK_IMPORTED_MODULE_5__.addOnParticipantsChange),
/* harmony export */   "addOnPoll": () => (/* reexport safe */ _add_on_poll__WEBPACK_IMPORTED_MODULE_11__.addOnPoll),
/* harmony export */   "addOnStateChange": () => (/* reexport safe */ _add_on_state_change__WEBPACK_IMPORTED_MODULE_2__.addOnStateChange),
/* harmony export */   "addOnStream": () => (/* reexport safe */ _add_on_stream__WEBPACK_IMPORTED_MODULE_10__.addOnStream),
/* harmony export */   "addOnStreamChange": () => (/* reexport safe */ _add_on_state_change__WEBPACK_IMPORTED_MODULE_2__.addOnStreamChange),
/* harmony export */   "addonChatState": () => (/* reexport safe */ _add_on_chatstate_change__WEBPACK_IMPORTED_MODULE_8__.addonChatState),
/* harmony export */   "addonFilePicThumb": () => (/* reexport safe */ _add_on_pictumb_change__WEBPACK_IMPORTED_MODULE_7__.addonFilePicThumb),
/* harmony export */   "addonUnreadMessage": () => (/* reexport safe */ _add_unread_message__WEBPACK_IMPORTED_MODULE_9__.addonUnreadMessage),
/* harmony export */   "initNewMessagesListener": () => (/* reexport safe */ _init_listeners__WEBPACK_IMPORTED_MODULE_0__.initNewMessagesListener)
/* harmony export */ });
/* harmony import */ var _init_listeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init-listeners */ "./listeners/init-listeners.js");
/* harmony import */ var _add_new_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-new-messages */ "./listeners/add-new-messages.js");
/* harmony import */ var _add_on_state_change__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-on-state-change */ "./listeners/add-on-state-change.js");
/* harmony import */ var _add_on_new_ack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-on-new-ack */ "./listeners/add-on-new-ack.js");
/* harmony import */ var _add_on_live_location__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-on-live-location */ "./listeners/add-on-live-location.js");
/* harmony import */ var _add_on_participants_change__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-on-participants-change */ "./listeners/add-on-participants-change.js");
/* harmony import */ var _add_on_added_to_group__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-on-added-to-group */ "./listeners/add-on-added-to-group.js");
/* harmony import */ var _add_on_pictumb_change__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-on-pictumb-change */ "./listeners/add-on-pictumb-change.js");
/* harmony import */ var _add_on_chatstate_change__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-on-chatstate-change */ "./listeners/add-on-chatstate-change.js");
/* harmony import */ var _add_unread_message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-unread-message */ "./listeners/add-unread-message.js");
/* harmony import */ var _add_on_stream__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./add-on-stream */ "./listeners/add-on-stream.js");
/* harmony import */ var _add_on_poll__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./add-on-poll */ "./listeners/add-on-poll.js");














/***/ }),

/***/ "./listeners/init-listeners.js":
/*!*************************************!*\
  !*** ./listeners/init-listeners.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initNewMessagesListener": () => (/* binding */ initNewMessagesListener)
/* harmony export */ });
function initNewMessagesListener() {
  window.WAPI.waitForStore(['Chat', 'Msg'], () => {
    window.WAPI._newMessagesListener = window.Store.Msg.on(
      'add',
      async (newMessage) => {
        if (newMessage && newMessage.isNewMsg && !newMessage.isSentByMe) {
          let message = await window.WAPI.processMessageObj(
            newMessage,
            false,
            false
          );
          if (message) {
            window.WAPI._newMessagesQueue.push(message);
            window.WAPI._newMessagesBuffer.push(message);
          }

          // Starts debouncer time to don't call a callback for each message if more than one message arrives
          // in the same second
          if (
            !window.WAPI._newMessagesDebouncer &&
            window.WAPI._newMessagesQueue.length > 0
          ) {
            window.WAPI._newMessagesDebouncer = setTimeout(() => {
              let queuedMessages = window.WAPI._newMessagesQueue;

              window.WAPI._newMessagesDebouncer = null;
              window.WAPI._newMessagesQueue = [];

              let removeCallbacks = [];

              window.WAPI._newMessagesCallbacks.forEach(function (callbackObj) {
                if (callbackObj.callback !== undefined) {
                  callbackObj.callback(queuedMessages);
                }
                if (callbackObj.rmAfterUse === true) {
                  removeCallbacks.push(callbackObj);
                }
              });

              // Remove removable callbacks.
              removeCallbacks.forEach(function (rmCallbackObj) {
                let callbackIndex =
                  window.WAPI._newMessagesCallbacks.indexOf(rmCallbackObj);
                window.WAPI._newMessagesCallbacks.splice(callbackIndex, 1);
              });
            }, 1000);
          }
        }
      }
    );
  });

  window.WAPI._unloadInform = (event) => {
    // Save in the buffer the ungot unreaded messages
    window.WAPI._newMessagesBuffer.forEach((message) => {
      Object.keys(message).forEach((key) =>
        message[key] === undefined ? delete message[key] : ''
      );
    });

    sessionStorage.setItem(
      'saved_msgs',
      JSON.stringify(window.WAPI._newMessagesBuffer)
    );

    // Inform callbacks that the page will be reloaded.
    window.WAPI._newMessagesCallbacks.forEach(function (callbackObj) {
      if (callbackObj.callback !== undefined) {
        callbackObj.callback({
          status: -1,
          message: 'page will be reloaded, wait and register callback again.'
        });
      }
    });
  };
}


/***/ }),

/***/ "./serializers/index.js":
/*!******************************!*\
  !*** ./serializers/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_serializeChatObj": () => (/* reexport safe */ _serialize_chat__WEBPACK_IMPORTED_MODULE_0__._serializeChatObj),
/* harmony export */   "_serializeContactObj": () => (/* reexport safe */ _serialize_contact__WEBPACK_IMPORTED_MODULE_3__._serializeContactObj),
/* harmony export */   "_serializeForcing": () => (/* reexport safe */ _serialize_forcing__WEBPACK_IMPORTED_MODULE_6__._serializeForcing),
/* harmony export */   "_serializeMeObj": () => (/* reexport safe */ _serielize_me__WEBPACK_IMPORTED_MODULE_5__._serializeMeObj),
/* harmony export */   "_serializeMessageObj": () => (/* reexport safe */ _serialize_message__WEBPACK_IMPORTED_MODULE_2__._serializeMessageObj),
/* harmony export */   "_serializeProfilePicThumb": () => (/* reexport safe */ _serialize_profile_pic_thumb__WEBPACK_IMPORTED_MODULE_4__._serializeProfilePicThumb),
/* harmony export */   "_serializeRawObj": () => (/* reexport safe */ _serialize_raw__WEBPACK_IMPORTED_MODULE_1__._serializeRawObj)
/* harmony export */ });
/* harmony import */ var _serialize_chat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./serialize-chat */ "./serializers/serialize-chat.js");
/* harmony import */ var _serialize_raw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./serialize-raw */ "./serializers/serialize-raw.js");
/* harmony import */ var _serialize_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./serialize-message */ "./serializers/serialize-message.js");
/* harmony import */ var _serialize_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./serialize-contact */ "./serializers/serialize-contact.js");
/* harmony import */ var _serialize_profile_pic_thumb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serialize-profile-pic-thumb */ "./serializers/serialize-profile-pic-thumb.js");
/* harmony import */ var _serielize_me__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./serielize-me */ "./serializers/serielize-me.js");
/* harmony import */ var _serialize_forcing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./serialize-forcing */ "./serializers/serialize-forcing.js");









/***/ }),

/***/ "./serializers/serialize-chat.js":
/*!***************************************!*\
  !*** ./serializers/serialize-chat.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_serializeChatObj": () => (/* binding */ _serializeChatObj)
/* harmony export */ });
/* harmony import */ var _serialize_raw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./serialize-raw */ "./serializers/serialize-raw.js");

/**
 * Serializes a chat object
 * @param rawChat Chat object
 * @returns {Chat}
 */
const _serializeChatObj = (obj) => {
  if (obj == undefined) {
    return null;
  }
  return Object.assign(window.WAPI._serializeRawObj(obj), {
    kind: obj?.kind,
    isGroup: obj?.isGroup,
    contact: obj?.contact
      ? window.WAPI._serializeContactObj(obj?.contact)
      : null,
    groupMetadata: obj?.groupMetadata
      ? window.WAPI._serializeRawObj(obj?.groupMetadata)
      : null,
    presence: obj?.presence
      ? window.WAPI._serializeRawObj(obj?.presence)
      : null,
    msgs: null,
    tcToken: null,
    isOnline: obj?.__x_presence?.attributes?.isOnline || null,
    lastSeen: obj?.previewMessage?.__x_ephemeralStartTimestamp
      ? obj.previewMessage.__x_ephemeralStartTimestamp * 1000
      : null
  });
};


/***/ }),

/***/ "./serializers/serialize-contact.js":
/*!******************************************!*\
  !*** ./serializers/serialize-contact.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_serializeContactObj": () => (/* binding */ _serializeContactObj)
/* harmony export */ });
const _serializeContactObj = (obj) => {
  if (obj == undefined) {
    return null;
  }

  if (!obj.profilePicThumb && obj.id && Store.ProfilePicThumb) {
    obj.profilePicThumb = Store.ProfilePicThumb.get(obj.id);
  }

  return Object.assign(window.WAPI._serializeRawObj(obj), {
    formattedName: obj?.formattedName,
    displayName: obj?.displayName,
    formattedShortName: obj?.formattedShortName,
    formattedShortNameWithNonBreakingSpaces:
      obj?.formattedShortNameWithNonBreakingSpaces,
    isHighLevelVerified: obj?.isHighLevelVerified,
    isMe: obj?.isMe,
    mentionName: obj?.mentionName,
    notifyName: obj?.notifyName,
    isMyContact: obj?.isMyContact,
    isPSA: obj?.isPSA,
    isUser: obj?.isUser,
    isVerified: obj?.isVerified,
    isWAContact: obj?.isWAContact,
    profilePicThumbObj: obj?.profilePicThumb
      ? WAPI._serializeProfilePicThumb(obj?.profilePicThumb)
      : {},
    statusMute: obj?.statusMute,
    msgs: null
  });
};


/***/ }),

/***/ "./serializers/serialize-forcing.js":
/*!******************************************!*\
  !*** ./serializers/serialize-forcing.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_serializeForcing": () => (/* binding */ _serializeForcing)
/* harmony export */ });
const _serializeForcing = (obj) => {
  if (Array.isArray(obj) && obj.length && obj[0] && obj[0]._value) {
    const refactore = obj[0]._value;
    const newObj = {};
    Object.assign(newObj, {
      ack: refactore?.ack,
      body: refactore?.body,
      from: refactore?.from,
      id: refactore?.id,
      sender: refactore?.sender
    });
    return newObj;
  }

  return null;
};


/***/ }),

/***/ "./serializers/serialize-message.js":
/*!******************************************!*\
  !*** ./serializers/serialize-message.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_serializeMessageObj": () => (/* binding */ _serializeMessageObj)
/* harmony export */ });
const _serializeMessageObj = async (obj) => {
  if (obj === undefined) {
    return null;
  }
  const _chat = obj['chat'] ? await WAPI._serializeChatObj(obj['chat']) : {};
  let chats = await WAPI.getAllChats();
  return {
    ...window.WAPI._serializeRawObj(obj),
    id: obj?.id?._serialized,
    from: obj?.from?._serialized,
    quotedParticipant: obj?.quotedParticipant?._serialized
      ? obj?.quotedParticipant?._serialized
      : undefined,
    author: obj?.author?._serialized ? obj?.author?._serialized : undefined,
    chatId: obj?.id?.remote
      ? obj?.id?.remote
      : obj?.chatId?._serialized
      ? obj?.chatId?._serialized
      : undefined,
    to: obj?.to?._serialized ? obj?.to?._serialized : undefined,
    fromMe: obj?.id?.fromMe,
    sender: obj?.senderObj
      ? await WAPI._serializeContactObj(obj?.senderObj)
      : null,
    timestamp: obj?.t,
    content: obj?.body,
    body: obj?.body,
    isLink: obj?.isLink,
    isMMS: obj?.isMMS,
    isMedia: obj?.isMedia,
    isNotification: obj?.isNotification,
    isPSA: obj?.isPSA,
    type: obj?.type,
    chat: _chat,
    isOnline: _chat?.isOnline,
    lastSeen: _chat?.lastSeen,
    quotedMsgObj: obj?.quotedMsg,
    quotedStanzaId: obj?.quotedStanzaID ? obj?.quotedStanzaID : undefined,
    mediaData: window.WAPI._serializeRawObj(obj?.mediaData),
    caption: obj?.caption,
    deprecatedMms3Url: obj?.deprecatedMms3Url,
    directPath: obj?.directPath,
    encFilehash: obj?.encFilehash,
    filehash: obj?.filehash,
    filename: obj?.filename,
    mimetype: obj?.mimetype,
    clientUrl: obj?.clientUrl,
    mediaKey: obj?.mediaKey,
    size: obj?.size,
    t: obj?.t,
    isNewMsg: obj?.isNewMsg,
    linkPreview: obj?.linkPreview,
    text: obj?.text,
    height: obj?.height,
    width: obj?.width,
    self: obj?.self,
    initialPageSize: obj?.initialPageSize,
    lat: obj?.lat ? obj.lat : undefined,
    lng: obj?.lng ? obj.lng : undefined,
    ack: obj?.ack,
    scanLengths: null,
    scansSidecar: null,
    streamingSidecar: null,
    waveform: null,
    replyButtons: null,
    dynamicReplyButtons: null,
    buttons: null,
    hydratedButtons: null,
    isGroupMsg:
      obj?.to?.server === 'g.us' || obj?.from?.server === 'g.us' ? true : false,
    groupInfo:
      obj?.to?.server === 'g.us' || obj?.from?.server === 'g.us'
        ? chats.find((chat) => chat.id._serialized === obj.from._serialized)
            .contact
        : null,
    reply: (body) => window.WAPI.reply(_chat.id._serialized, body, obj)
  };
};


/***/ }),

/***/ "./serializers/serialize-profile-pic-thumb.js":
/*!****************************************************!*\
  !*** ./serializers/serialize-profile-pic-thumb.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_serializeProfilePicThumb": () => (/* binding */ _serializeProfilePicThumb)
/* harmony export */ });
const _serializeProfilePicThumb = (obj) => {
  if (obj == undefined) {
    return null;
  }

  return Object.assign(
    {},
    {
      eurl: obj?.eurl,
      id: obj?.id,
      img: obj?.img,
      imgFull: obj?.imgFull,
      raw: obj?.raw,
      tag: obj?.tag
    }
  );
};


/***/ }),

/***/ "./serializers/serialize-raw.js":
/*!**************************************!*\
  !*** ./serializers/serialize-raw.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_serializeRawObj": () => (/* binding */ _serializeRawObj)
/* harmony export */ });
const _serializeRawObj = (obj) => {
  if (obj?.toJSON) {
    obj.waveform = null;
    return obj.toJSON();
  }
  return {};
};


/***/ }),

/***/ "./serializers/serielize-me.js":
/*!*************************************!*\
  !*** ./serializers/serielize-me.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_serializeMeObj": () => (/* binding */ _serializeMeObj)
/* harmony export */ });
const _serializeMeObj = async (obj) => {
  if (obj == undefined) {
    return null;
  }

  const connection = window.Store.State?.Socket?.state
    ? window.Store?.State?.Socket?.state
    : undefined;

  const newObj = {};

  console.log(newObj.id);

  Object.assign(newObj, {
    id: obj.id ? obj.id : null,
    displayName: obj.displayName ? obj.displayName : null,
    verifiedName: obj.verifiedName ? obj.verifiedName : null,
    searchName: obj.searchName ? obj.searchName : null,
    pushname: obj.pushname ? obj.pushname : null,
    notifyName: obj.notifyName ? obj.notifyName : null,
    isBusiness: obj.isBusiness ? obj.isBusiness : null,
    formattedUser: obj.formattedUser ? obj.formattedUser : null,
    ...obj.profilePicThumb?.attributes,
    ...obj.businessProfile?.attributes
  });
  return newObj;
};


/***/ }),

/***/ "./store/get-store.js":
/*!****************************!*\
  !*** ./store/get-store.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStore": () => (/* binding */ getStore)
/* harmony export */ });
/* eslint-disable prettier/prettier */
const { storeObjects } = __webpack_require__(/*! ./store-objects */ "./store/store-objects.js");
async function getStore(modules) {
  let foundCount = 0;
  const neededObjects = storeObjects;
  for (let idx in modules) {
    if (typeof modules[idx] === 'object' && modules[idx] !== null) {
      neededObjects.forEach((needObj) => {
        if (!needObj.conditions || needObj.foundedModule) return;
        // console.log(needObj.id);
        let neededModule = needObj.conditions(modules[idx]);
        if (neededModule !== null) {
          foundCount++;
          needObj.foundedModule = neededModule;
        }
      });
      if (foundCount == neededObjects.length) {
        break;
      }
    }
  }

  neededObjects.forEach((needObj) => {
    if (needObj.foundedModule) {
      if (needObj.id !== "module") {
        window.Store[needObj.id] = needObj.foundedModule;
      }
    }
  });

  const module = (neededObjects.filter((e) => e.id === 'module'))[0].foundedModule;
  Object.keys(module).forEach((key) => {
    if (![
      'Chat',
    ].includes(key)) {
      if (window.Store[key]) {
        window.Store[key + '_'] = module[key];
      } else {
        window.Store[key] = module[key];
      }
    }
  });

  if (window.Store.MediaCollection) {
    window.Store.MediaCollection.prototype.processFiles =
      window.Store.MediaCollection.prototype.processFiles ||
      window.Store.MediaCollection.prototype.processAttachments;
  }

  window.mR = async (find) => {
    return new Promise((resolve) => {
      const parasite = `parasite${Date.now()}`;
      window["webpackChunkwhatsapp_web_client"].push([
        [parasite],
        {},
        function (o) {
          let modules = [];
          for (let idx in o.m) {
            modules.push(o(idx));
          }
          for (let idx in modules) {
            if (typeof modules[idx] === "object" && modules[idx] !== null) {
              let module = modules[idx];

              var evet = module[find] ? module : null;
              if (evet) {
                window[find] = evet;
                return resolve(window[find]);
              }
            }
          }

        },
      ]);
    });
  }

  window.injectToFunction = (selector, callback) => {
    (async () => {
      const Nr = await window.mR(selector);
      const oldFunct = Nr[selector];
      //console.log(selector, oldFunct);
      Nr[selector] = (...args) => callback(oldFunct, args);
    })();
  };

  window.injectToFunction('createMsgProtobuf', (func, args) => {
    const proto = func(...args);
    const [message] = args;

    if (proto.listMessage) {
      proto.viewOnceMessage = {
        message: {
          listMessage: proto.listMessage
        }
      };
      delete proto.listMessage;
    }

    if (proto.buttonsMessage) {
      proto.viewOnceMessage = {
        message: {
          buttonsMessage: proto.buttonsMessage,
        },
      };
      delete proto.buttonsMessage;
    }

    if (proto.templateMessage) {
      proto.viewOnceMessage = {
        message: {
          templateMessage: proto.templateMessage,
        },
      };
      delete proto.templateMessage;
    }

    if (message.hydratedButtons) {
      const hydratedTemplate = {
        hydratedButtons: message.hydratedButtons,
      };

      if (message.footer) {
        hydratedTemplate.hydratedFooterText = message.footer;
      }

      if (message.caption) {
        hydratedTemplate.hydratedContentText = message.caption;
      }

      if (message.title) {
        hydratedTemplate.hydratedTitleText = message.title;
      }

      if (proto.conversation) {
        hydratedTemplate.hydratedContentText = proto.conversation;
        delete proto.conversation;
      } else if (proto.extendedTextMessage?.text) {
        hydratedTemplate.hydratedContentText = proto.extendedTextMessage.text;
        delete proto.extendedTextMessage;
      } else {
        // Search media part in message
        let found;
        const mediaPart = [
          'documentMessage',
          'imageMessage',
          'locationMessage',
          'videoMessage',
        ];
        for (const part of mediaPart) {
          if (part in proto) {
            found = part;
            break;
          }
        }

        if (!found) {
          return proto;
        }

        // Media message doesn't allow title
        hydratedTemplate[found] = proto[found];

        // Copy title to caption if not setted
        if (
          hydratedTemplate.hydratedTitleText &&
          !hydratedTemplate.hydratedContentText
        ) {
          hydratedTemplate.hydratedContentText =
            hydratedTemplate.hydratedTitleText;
        }

        // Remove title for media messages
        delete hydratedTemplate.hydratedTitleText;

        if (found === 'locationMessage') {
          if (
            !hydratedTemplate.hydratedContentText &&
            (proto[found].name || proto[found].address)
          ) {
            hydratedTemplate.hydratedContentText =
              proto[found].name && proto[found].address
                ? `${proto[found].name}\n${proto[found].address}`
                : proto[found].name || proto[found].address || '';
          }
        }

        // Ensure a content text;
        hydratedTemplate.hydratedContentText =
          hydratedTemplate.hydratedContentText || ' ';

        delete proto[found];
      }

      proto.templateMessage = {
        hydratedTemplate,
      };
    }

    return proto;
  });

  window.injectToFunction('mediaTypeFromProtobuf', (func, ...args) => {
    const [proto] = args;
    if (proto.viewOnceMessage?.message.templateMessage.hydratedTemplate) {
      return func(proto.viewOnceMessage?.message.templateMessage.hydratedTemplate);
    }
    return func(...args);
  });

  window.injectToFunction('typeAttributeFromProtobuf', (func, args) => {
    const [proto] = args;
    console.log(`proto`, proto);

    if (proto.viewOnceMessage?.message.listMessage) {
      return 'text';
    }

    if (proto.imageMessage || proto.audioMessage) {
      return 'text';
    }

    if (
      proto.viewOnceMessage?.message?.buttonsMessage?.headerType === 1 ||
      proto.viewOnceMessage?.message?.buttonsMessage?.headerType === 2
    ) {
      return 'text';
    }

    if (proto.viewOnceMessage?.message.templateMessage.hydratedTemplate) {
      return 'text';
    }

    return 'text';
  });

  window.injectToFunction('createFanoutMsgStanza', async (func, args) => {
    const [, proto] = args;

    let buttonNode = null;

    if (proto.viewOnceMessage?.message.listMessage) {
      const listType = proto.viewOnceMessage?.message.listMessage?.listType || 0;

      const types = ['unknown', 'single_select', 'product_list'];

      buttonNode = Store.Websocket.smax('list', {
        v: '2',
        type: types[listType],
      });
    }

    const node = await func(...args);

    if (!buttonNode) {
      return node;
    }

    const content = node.content;

    let bizNode = content.find((c) => c.tag === 'biz');

    if (!bizNode) {
      bizNode = Store.Websocket.smax('biz', {}, null);
      content.push(bizNode);
    }

    let hasButtonNode = false;

    if (Array.isArray(bizNode.content)) {
      hasButtonNode = !!bizNode.content.find((c) => c.tag === buttonNode?.tag);
    } else {
      bizNode.content = [];
    }


    if (!hasButtonNode) {
      bizNode.content.push(buttonNode);
    }

    return node;
  });
}



/***/ }),

/***/ "./store/store-objects.js":
/*!********************************!*\
  !*** ./store/store-objects.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "storeObjects": () => (/* binding */ storeObjects)
/* harmony export */ });
const storeObjects = [
  {
    id: 'module',
    conditions: (module) =>
      module.default && module.default.Chat && module.default.Msg
        ? module.default
        : null,
  },
  {
    id: 'replyButton',
    conditions: (module) =>
      module.__esModule &&
        module.default &&
        module.default.prototype &&
        module.default.prototype.proxyName === 'replyButton'
        ? module.default
        : null,
  },
  {
    id: 'templateButton',
    conditions: (module) =>
      module.__esModule &&
        module.default &&
        module.default.prototype &&
        module.default.prototype.proxyName === 'templateButton'
        ? module.default
        : null,
  },
  {
    id: 'TemplateButtonCollection',
    conditions: (module) =>
      module.TemplateButtonCollection ? module.TemplateButtonCollection : null,
  },
  {
    id: 'ButtonCollection',
    conditions: (module) =>
      module.ButtonCollection ? module.ButtonCollection : null,
  },
  {
    id: 'MediaCollection',
    conditions: (module) =>
      module.default &&
        module.default.prototype &&
        (module.default.prototype.processFiles !== undefined ||
          module.default.prototype.processAttachments !== undefined)
        ? module.default
        : null,
  },
  { id: 'MediaProcess', conditions: (module) => (module.BLOB ? module : null) },
  {
    id: 'ChatUtil',
    conditions: (module) => (module.sendClear ? module : null),
  },
  {
    id: 'GroupInvite',
    conditions: (module) =>
      module.sendQueryGroupInviteCode && module.sendRevokeGroupInviteCode
        ? module
        : null,
  },
  {
    id: 'Wap',
    conditions: (module) => (module.createGroup ? module : null),
  },
  {
    id: 'ServiceWorker',
    conditions: (module) =>
      module.default && module.default.killServiceWorker ? module : null,
  },
  {
    id: 'WapDelete',
    conditions: (module) =>
      module.sendConversationDelete && module.sendConversationDelete.length == 2
        ? module
        : null,
  },
  {
    id: 'Conn',
    conditions: (module) =>
      module.default && module.default.ref && module.default.refTTL
        ? module.default
        : null,
  },
  {
    id: 'WapQuery',
    conditions: (module) =>
      module.default &&
        module.default.contactFindQuery &&
        module.default.queryExist
        ? module.default
        : null,
  },
  {
    id: 'CryptoLib',
    conditions: (module) => (module.decryptE2EMedia ? module : null),
  },
  {
    id: 'OpenChat',
    conditions: (module) =>
      module.default &&
        module.default.prototype &&
        module.default.prototype.openChat
        ? module.default
        : null,
  },
  {
    id: 'UserConstructor',
    conditions: (module) =>
      module.default &&
        module.default.prototype &&
        module.default.prototype.isServer &&
        module.default.prototype.isUser
        ? module.default
        : null,
  },
  {
    id: 'SendTextMsgToChat',
    conditions: (module) =>
      module.sendTextMsgToChat ? module.sendTextMsgToChat : null,
  },
  {
    id: 'Archive',
    conditions: (module) => (module.setArchive ? module : null),
  },
  {
    id: 'pinChat',
    conditions: (module) => (module.setPin ? module : null),
  },
  {
    id: 'sendDelete',
    conditions: (module) => (module.sendDelete ? module.sendDelete : null),
  },
  {
    id: 'addAndSendMsgToChat',
    conditions: (module) =>
      module.addAndSendMsgToChat ? module.addAndSendMsgToChat : null,
  },
  {
    id: 'sendMsgToChat',
    conditions: (module) =>
      module.sendMsgToChat ? module.sendMsgToChat : null,
  },
  {
    id: 'Catalog',
    conditions: (module) => (module.Catalog ? module.Catalog : null),
  },
  {
    id: 'Perfil',
    conditions: (module) =>
      module.__esModule === true &&
        module.setPushname &&
        !module.getComposeContents
        ? module
        : null,
  },
  {
    id: 'MsgKey',
    conditions: (module) =>
      module.default &&
        module.default.toString &&
        typeof module.default.toString === 'function' &&
        module.default.toString().includes('MsgKey error: obj is null/undefined')
        ? module.default
        : null,
  },
  {
    id: 'Parser',
    conditions: (module) =>
      module.convertToTextWithoutSpecialEmojis ? module.default : null,
  },
  {
    id: 'Builders',
    conditions: (module) =>
      module.TemplateMessage && module.HydratedFourRowTemplate ? module : null,
  },
  {
    id: 'Me',
    conditions: (module) =>
      module.Conn && module.ConnImpl ? module.Conn : null,
  },
  {
    id: 'CallUtils',
    conditions: (module) =>
      module.sendCallEnd && module.parseCall ? module : null,
  },
  {
    id: 'Identity',
    conditions: (module) =>
      module.queryIdentity && module.updateIdentity ? module : null,
  },
  {
    id: 'MyStatus',
    conditions: (module) =>
      module.getStatus && module.setMyStatus ? module : null,
  },
  {
    id: 'ChatStates',
    conditions: (module) =>
      module.sendChatStatePaused &&
        module.sendChatStateRecording &&
        module.sendChatStateComposing
        ? module
        : null,
  },
  {
    id: 'GroupActions',
    conditions: (module) =>
      module.sendExitGroup && module.localExitGroup ? module : null,
  },
  {
    id: 'Features',
    conditions: (module) =>
      module.FEATURE_CHANGE_EVENT && module.features ? module : null,
  },
  {
    id: 'MessageUtils',
    conditions: (module) =>
      module.storeMessages && module.appendMessage ? module : null,
  },
  {
    id: 'createMessageKey',
    conditions: (module) =>
      module.createMessageKey && module.createDeviceSentMessage
        ? module.createMessageKey
        : null,
  },
  {
    id: 'WidFactory',
    conditions: (module) =>
      module.isWidlike && module.createWid && module.createWidFromWidLike
        ? module
        : null,
  },
  {
    id: 'Base',
    conditions: (module) =>
      module.setSubProtocol && module.binSend && module.actionNode
        ? module
        : null,
  },
  {
    id: 'Base2',
    conditions: (module) =>
      module.supportsFeatureFlags &&
        module.parseMsgStubProto &&
        module.binSend &&
        module.subscribeLiveLocation
        ? module
        : null,
  },
  {
    id: 'MaybeMeUser',
    conditions: (module) => (module.getMaybeMeUser ? module : null),
  },
  {
    id: 'Sticker',
    conditions: (module) =>
      module.StickerCollection && module.default ? module : null,
  },
  {
    id: 'MediaObject',
    conditions: (module) =>
      module.getOrCreateMediaObject && module.disassociateMediaFromStickerPack
        ? module
        : null,
  },
  {
    id: 'MediaUpload',
    conditions: (module) =>
      module.default && module.default.mediaUpload ? module.default : null,
  },
  {
    id: 'UploadUtils',
    conditions: (module) =>
      module.default && module.default.encryptAndUpload ? module.default : null,
  },
  {
    id: 'Cmd',
    conditions: (module) => (module.CmdImpl && module.Cmd ? module.Cmd : null),
  },
  {
    id: 'ReadSeen',
    conditions: (module) => (module.sendSeen ? module : null),
  },
  {
    id: 'Block',
    conditions: (module) =>
      module.blockContact && module.unblockContact ? module : null,
  },
  {
    id: 'BlockList',
    conditions: (module) => (module.BlocklistCollection ? module : null),
  },
  {
    id: 'Theme',
    conditions: (module) =>
      module.getTheme && module.setTheme ? module : null,
  },
  {
    id: 'Vcard',
    conditions: (module) => (module.vcardFromContactModel ? module : null),
  },
  {
    id: 'Profile',
    conditions: (module) =>
      module.sendSetPicture && module.requestDeletePicture ? module : null,
  },
  {
    id: 'SendMute',
    conditions: (module) => (module.sendConversationMute ? module : null),
  },
  {
    id: 'Validators',
    conditions: (module) => (module.findLinks ? module : null),
  },
  {
    id: 'Wap2',
    conditions: (module) => (module.Wap ? module : null),
  },
  {
    id: 'genId',
    conditions: (module) =>
      module.default &&
        typeof module.default === 'function' &&
        module.default.toString().match(/crypto/)
        ? module
        : null,
  },
  {
    id: 'GroupMetadata',
    conditions: (module) =>
      module.default && module.default.handlePendingInvite ? module : null,
  },
  {
    id: 'i10n',
    conditions: (module) =>
      module.default && module.default.downloadAppLocale
        ? module.default
        : null,
  },
  {
    id: 'NetworkStatus',
    conditions: (module) =>
      module.default && module.default._logOnlineOffline
        ? module.default
        : null,
  },
  {
    id: 'Stream',
    conditions: (module) =>
      module.Stream && module.StreamInfo ? module.Stream : null,
  },
  {
    id: 'State',
    conditions: (module) => (module.Socket ? module : null),
  },
  {
    id: 'ws2',
    conditions: (module) =>
      module.default && module.default.destroyStorage ? module.default : null,
  },
  {
    id: 'Login',
    conditions: (module) => (module.startLogout ? module : null),
  },
  {
    id: 'BlobCache',
    conditions: (module) =>
      module.default && module.default.getOrCreateURL ? module.default : null,
  },
  {
    id: 'Presence',
    conditions: (module) =>
      module.setPresenceAvailable && module.setPresenceUnavailable
        ? module
        : null,
  },
  {
    id: 'PresenceCollection',
    conditions: (module) =>
      module.default && module.PresenceCollection ? module.default : null,
  },
  {
    id: 'chatOptions',
    conditions: (module) =>
      module.default && module.default.archiveChat ? module.default : null,
  },
  {
    id: 'blob',
    conditions: (module) =>
      module.default && module.default.createFromData ? module : null,
  },
  {
    id: 'GroupDesc',
    conditions: (module) => (module.setGroupDesc ? module : null),
  },
  {
    id: 'infoGroup',
    conditions: (module) => (module.queryGroupInviteInfo ? module : null),
  },
  {
    id: 'GroupTitle',
    conditions: (module) => (module.sendSetGroupSubject ? module : null),
  },
  {
    id: 'GroupSettings',
    conditions: (module) => (module.sendSetGroupProperty ? module : null),
  },
  {
    id: 'createGroup',
    conditions: (module) =>
      module.createGroup && module.sendForNeededAddRequest
        ? module.createGroup
        : null,
  },
  {
    id: 'SetStatusChat',
    conditions: (module) =>
      module.markComposing && module.markRecording ? module : null,
  },
  {
    id: 'Reactions',
    conditions: (module) => (module.sendReactionToMsg ? module : null),
  },
  {
    id: 'CheckWid',
    conditions: (module) => (module.validateWid ? module : null),
  },
  {
    id: 'ProfileBusiness',
    conditions: (module) => (module.BUSINESS_URL_DOMAIN ? module : null),
  },
  {
    id: 'Contacts',
    conditions: (module) => (module.ContactCollection ? module : null),
  },
  {
    id: 'onlySendAdmin',
    conditions: (module) =>
      module.setGroupProperty && module.setGroupDescription ? module : null,
  },
  {
    id: 'SendCommunity',
    conditions: (module) => (module.sendCreateCommunity ? module : null),
  },
  {
    id: 'Websocket',
    conditions: (module) => (module.smax ? module : null),
  },
  {
    id: "Survey",
    conditions: (module) => (module.sendPollCreation ? module : null),
  },
  {
    id: "Cmd",
    conditions: (module) => (module.APP_STATE_SYNC_COMPLETED ? module : null),
  },
  {
    id: "Wap",
    conditions: (module) => (module.BIG_ENDIAN_CONTENT ? module : null),
  },
  {
    id: "WapParser",
    conditions: (module) => (module.WapParser ? module : null),
  },
  {
    id: "SendSocket",
    conditions: (module) => (module.deprecatedSendIq ? module : null),
  }
  ,
  {
    id: "Jid",
    conditions: (module) => (module.WAP_JID_SUBTYPE ? module : null),
  }
 
];


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************!*\
  !*** ./wapi.js ***!
  \*****************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./functions/index.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper */ "./helper/index.js");
/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listeners */ "./listeners/index.js");
/* harmony import */ var _serializers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./serializers */ "./serializers/index.js");
/* harmony import */ var _store_get_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/get-store */ "./store/get-store.js");






window.Store = {};

function injectParasite() {
  if (
    window.webpackChunkwhatsapp_web_client &&
    Array.isArray(window.webpackChunkwhatsapp_web_client)
  ) {
    const parasite = _helper__WEBPACK_IMPORTED_MODULE_1__.injectConfig.parasite;
    window[_helper__WEBPACK_IMPORTED_MODULE_1__.injectConfig.webpack].push([
      [parasite],
      {},
      async function (o) {
        let modules = [];
        for (let idx in o.m) {
          modules.push(o(idx));
        }
        (0,_store_get_store__WEBPACK_IMPORTED_MODULE_4__.getStore)(modules);
      }
    ]);
  }
}

(async () => {
  window[_helper__WEBPACK_IMPORTED_MODULE_1__.injectConfig.webpack] = window[_helper__WEBPACK_IMPORTED_MODULE_1__.injectConfig.webpack] || [];
  while (true) {
    const last = window[_helper__WEBPACK_IMPORTED_MODULE_1__.injectConfig.webpack].length - 1;
    if (
      !window[_helper__WEBPACK_IMPORTED_MODULE_1__.injectConfig.webpack][last][0].includes(_helper__WEBPACK_IMPORTED_MODULE_1__.injectConfig.parasite) &&
      document.querySelectorAll('#app .two').length
    ) {
      injectParasite();
      break;
    }
    await (0,_helper__WEBPACK_IMPORTED_MODULE_1__.sleep)(2000);
  }
})();

if (typeof window.WAPI === 'undefined') {
  window.WAPI = {};

  //Community
  window.WAPI.createCommunity = _functions__WEBPACK_IMPORTED_MODULE_0__.createCommunity;

  //others
  window.WAPI.interfaceMute = _functions__WEBPACK_IMPORTED_MODULE_0__.interfaceMute;
  window.WAPI.checkIdMessage = _functions__WEBPACK_IMPORTED_MODULE_0__.checkIdMessage;
  window.WAPI.returnReply = _functions__WEBPACK_IMPORTED_MODULE_0__.returnReply;
  window.WAPI.getStore = _store_get_store__WEBPACK_IMPORTED_MODULE_4__.getStore;
  window.WAPI.setNewMessageId = _functions__WEBPACK_IMPORTED_MODULE_0__.setNewMessageId;
  window.WAPI.sendButtons = _functions__WEBPACK_IMPORTED_MODULE_0__.sendButtons;
  window.WAPI.checkNumberStatus = _functions__WEBPACK_IMPORTED_MODULE_0__.checkNumberStatus;
  window.WAPI.sendCheckType = _functions__WEBPACK_IMPORTED_MODULE_0__.sendCheckType;
  window.WAPI.sendListMenu = _functions__WEBPACK_IMPORTED_MODULE_0__.sendListMenu;
  window.WAPI.getStateConnection = _functions__WEBPACK_IMPORTED_MODULE_0__.getStateConnection;
  window.WAPI.sleep = _helper__WEBPACK_IMPORTED_MODULE_1__.sleep;
  window.WAPI.isBeta = _functions__WEBPACK_IMPORTED_MODULE_0__.isBeta;

  //Profile
  window.WAPI.setProfilePic = _functions__WEBPACK_IMPORTED_MODULE_0__.setProfilePic;
  window.WAPI.getSessionTokenBrowser = _functions__WEBPACK_IMPORTED_MODULE_0__.getSessionTokenBrowser;

  // Chat Functions
  window.WAPI.scope = _functions__WEBPACK_IMPORTED_MODULE_0__.scope;
  window.WAPI.getchatId = _functions__WEBPACK_IMPORTED_MODULE_0__.getchatId;
  window.WAPI.sendExist = _functions__WEBPACK_IMPORTED_MODULE_0__.sendExist;
  window.WAPI.returnChat = _functions__WEBPACK_IMPORTED_MODULE_0__.returnChat;
  window.WAPI.pinChat = _functions__WEBPACK_IMPORTED_MODULE_0__.pinChat;
  window.WAPI.archiveChat = _functions__WEBPACK_IMPORTED_MODULE_0__.archiveChat;

  // Layout Functions
  window.WAPI.setTheme = _functions__WEBPACK_IMPORTED_MODULE_0__.setTheme;
  window.WAPI.getTheme = _functions__WEBPACK_IMPORTED_MODULE_0__.getTheme;

  // Serializers assignations
  window.WAPI._serializeRawObj = _serializers__WEBPACK_IMPORTED_MODULE_3__._serializeRawObj;
  window.WAPI._serializeChatObj = _serializers__WEBPACK_IMPORTED_MODULE_3__._serializeChatObj;
  window.WAPI._serializeContactObj = _serializers__WEBPACK_IMPORTED_MODULE_3__._serializeContactObj;
  window.WAPI._serializeMessageObj = _serializers__WEBPACK_IMPORTED_MODULE_3__._serializeMessageObj;
  window.WAPI._serializeProfilePicThumb = _serializers__WEBPACK_IMPORTED_MODULE_3__._serializeProfilePicThumb;
  window.WAPI._serializeMeObj = _serializers__WEBPACK_IMPORTED_MODULE_3__._serializeMeObj;
  window.WAPI._serializeForcing = _serializers__WEBPACK_IMPORTED_MODULE_3__._serializeForcing;

  window.WAPI.onlySendAdmin = _functions__WEBPACK_IMPORTED_MODULE_0__.onlySendAdmin;

  // Group Functions
  window.WAPI.createGroup = _functions__WEBPACK_IMPORTED_MODULE_0__.createGroup;
  window.WAPI.leaveGroup = _functions__WEBPACK_IMPORTED_MODULE_0__.leaveGroup;
  window.WAPI.revokeGroupInviteLink = _functions__WEBPACK_IMPORTED_MODULE_0__.revokeGroupInviteLink;
  window.WAPI.getGroupInviteLink = _functions__WEBPACK_IMPORTED_MODULE_0__.getGroupInviteLink;
  window.WAPI.getGroupInfoFromInviteLink = _functions__WEBPACK_IMPORTED_MODULE_0__.getGroupInfoFromInviteLink;
  window.WAPI.getGroupAdmins = _functions__WEBPACK_IMPORTED_MODULE_0__.getGroupAdmins;
  window.WAPI.removeParticipant = _functions__WEBPACK_IMPORTED_MODULE_0__.removeParticipant;
  window.WAPI.addParticipant = _functions__WEBPACK_IMPORTED_MODULE_0__.addParticipant;
  window.WAPI.promoteParticipant = _functions__WEBPACK_IMPORTED_MODULE_0__.promoteParticipant;
  window.WAPI.demoteParticipant = _functions__WEBPACK_IMPORTED_MODULE_0__.demoteParticipant;
  window.WAPI.joinGroup = _functions__WEBPACK_IMPORTED_MODULE_0__.joinGroup;
  window.WAPI.setGroupDescription = _functions__WEBPACK_IMPORTED_MODULE_0__.setGroupDescription;
  window.WAPI.setPresenceOnline = _functions__WEBPACK_IMPORTED_MODULE_0__.setPresenceOnline;
  window.WAPI.setPresenceOffline = _functions__WEBPACK_IMPORTED_MODULE_0__.setPresenceOffline;
  window.WAPI.setGroupTitle = _functions__WEBPACK_IMPORTED_MODULE_0__.setGroupTitle;
  window.WAPI.setGroupSettings = _functions__WEBPACK_IMPORTED_MODULE_0__.setGroupSettings;

  // Chatting functions
  window.WAPI.sendChatstate = _functions__WEBPACK_IMPORTED_MODULE_0__.sendChatstate;
  window.WAPI.sendMessageWithThumb = _functions__WEBPACK_IMPORTED_MODULE_0__.sendMessageWithThumb;
  window.WAPI.processMessageObj = _functions__WEBPACK_IMPORTED_MODULE_0__.processMessageObj;
  window.WAPI.sendMessageWithTags = _functions__WEBPACK_IMPORTED_MODULE_0__.sendMessageWithTags;
  window.WAPI.sendMessage = _functions__WEBPACK_IMPORTED_MODULE_0__.sendMessage;
  window.WAPI.sendMessage2 = _functions__WEBPACK_IMPORTED_MODULE_0__.sendMessage2;
  window.WAPI.deleteConversation = _functions__WEBPACK_IMPORTED_MODULE_0__.deleteConversation;
  window.WAPI.deleteMessages = _functions__WEBPACK_IMPORTED_MODULE_0__.deleteMessages;
  window.WAPI.clearChatMessages = _functions__WEBPACK_IMPORTED_MODULE_0__.clearChatMessages;
  window.WAPI.sendImage = _functions__WEBPACK_IMPORTED_MODULE_0__.sendImage;
  window.WAPI.sendPtt = _functions__WEBPACK_IMPORTED_MODULE_0__.sendPtt;
  window.WAPI.sendFile = _functions__WEBPACK_IMPORTED_MODULE_0__.sendFile;
  window.WAPI.setMyName = _functions__WEBPACK_IMPORTED_MODULE_0__.setMyName;
  window.WAPI.setMyStatus = _functions__WEBPACK_IMPORTED_MODULE_0__.setMyStatus;
  window.WAPI.sendVideoAsGif = _functions__WEBPACK_IMPORTED_MODULE_0__.sendVideoAsGif;
  window.WAPI.processFiles = _functions__WEBPACK_IMPORTED_MODULE_0__.processFiles;
  window.WAPI.sendImageWithProduct = _functions__WEBPACK_IMPORTED_MODULE_0__.sendImageWithProduct;
  window.WAPI.sendContactVcard = _functions__WEBPACK_IMPORTED_MODULE_0__.sendContactVcard;
  window.WAPI.sendContactVcardList = _functions__WEBPACK_IMPORTED_MODULE_0__.sendContactVcardList;
  window.WAPI.forwardMessages = _functions__WEBPACK_IMPORTED_MODULE_0__.forwardMessages;
  window.WAPI.reply = _functions__WEBPACK_IMPORTED_MODULE_0__.reply;
  window.WAPI._sendSticker = _functions__WEBPACK_IMPORTED_MODULE_0__.sendSticker;
  window.WAPI.encryptAndUploadFile = _functions__WEBPACK_IMPORTED_MODULE_0__.encryptAndUploadFile;
  window.WAPI.sendImageAsSticker = _functions__WEBPACK_IMPORTED_MODULE_0__.sendImageAsSticker;
  window.WAPI.sendImageAsStickerGif = _functions__WEBPACK_IMPORTED_MODULE_0__.sendImageAsSticker;
  window.WAPI.startTyping = _functions__WEBPACK_IMPORTED_MODULE_0__.startTyping;
  window.WAPI.startRecording = _functions__WEBPACK_IMPORTED_MODULE_0__.startRecording;
  window.WAPI.markPaused = _functions__WEBPACK_IMPORTED_MODULE_0__.markPaused;
  window.WAPI.clearPresence = _functions__WEBPACK_IMPORTED_MODULE_0__.clearPresence;
  window.WAPI.presenceAvailable = _functions__WEBPACK_IMPORTED_MODULE_0__.presenceAvailable;
  window.WAPI.presenceUnavailable = _functions__WEBPACK_IMPORTED_MODULE_0__.presenceUnavailable;
  window.WAPI.sendLocation = _functions__WEBPACK_IMPORTED_MODULE_0__.sendLocation;
  window.WAPI.openChat = _functions__WEBPACK_IMPORTED_MODULE_0__.openChat;
  window.WAPI.openChatAt = _functions__WEBPACK_IMPORTED_MODULE_0__.openChatAt;
  window.WAPI.markUnseenMessage = _functions__WEBPACK_IMPORTED_MODULE_0__.markUnseenMessage;
  window.WAPI.markMarkSeenMessage = _functions__WEBPACK_IMPORTED_MODULE_0__.markMarkSeenMessage;
  window.WAPI.sendLinkPreview = _functions__WEBPACK_IMPORTED_MODULE_0__.sendLinkPreview;
  window.WAPI.sendMessageOptions = _functions__WEBPACK_IMPORTED_MODULE_0__.sendMessageOptions;
  window.WAPI.getAllMessagesDate = _functions__WEBPACK_IMPORTED_MODULE_0__.getAllMessagesDate;
  window.WAPI.sendReactions = _functions__WEBPACK_IMPORTED_MODULE_0__.sendReactions;
  window.WAPI.addChatWapi = _functions__WEBPACK_IMPORTED_MODULE_0__.addChatWapi;
  window.WAPI.sendTypeButtons = _functions__WEBPACK_IMPORTED_MODULE_0__.sendTypeButtons;
  window.WAPI.sendPollCreation = _functions__WEBPACK_IMPORTED_MODULE_0__.pollCreation;

  //////block functions
  window.WAPI.blockContact = _functions__WEBPACK_IMPORTED_MODULE_0__.blockContact;
  window.WAPI.unblockContact = _functions__WEBPACK_IMPORTED_MODULE_0__.unblockContact;
  window.WAPI.getBlockList = _functions__WEBPACK_IMPORTED_MODULE_0__.getBlockList;

  // Retrieving functions
  window.WAPI.getAllContacts = _functions__WEBPACK_IMPORTED_MODULE_0__.getAllContacts;
  window.WAPI.getMyContacts = _functions__WEBPACK_IMPORTED_MODULE_0__.getMyContacts;
  window.WAPI.getContact = _functions__WEBPACK_IMPORTED_MODULE_0__.getContact;
  window.WAPI.getAllChats = _functions__WEBPACK_IMPORTED_MODULE_0__.getAllChats;
  window.WAPI.getAllChatIds = _functions__WEBPACK_IMPORTED_MODULE_0__.getAllChatIds;
  window.WAPI.getAllChatsWithMessages = _functions__WEBPACK_IMPORTED_MODULE_0__.getAllChatsWithMessages;
  window.WAPI.getAllGroups = _functions__WEBPACK_IMPORTED_MODULE_0__.getAllGroups;
  window.WAPI.getChat = _functions__WEBPACK_IMPORTED_MODULE_0__.getChat;
  window.WAPI.getStatus = _functions__WEBPACK_IMPORTED_MODULE_0__.getStatus;
  window.WAPI.getChatByName = _functions__WEBPACK_IMPORTED_MODULE_0__.getChatByName;
  window.WAPI.getNewId = _functions__WEBPACK_IMPORTED_MODULE_0__.getNewId;
  window.WAPI.getChatById = _functions__WEBPACK_IMPORTED_MODULE_0__.getChatById;
  window.WAPI.loadEarlierMessages = _functions__WEBPACK_IMPORTED_MODULE_0__.loadChatEarlierMessages;
  window.WAPI.loadAllEarlierMessages = _functions__WEBPACK_IMPORTED_MODULE_0__.loadAllEarlierMessages;
  window.WAPI.asyncLoadAllEarlierMessages = _functions__WEBPACK_IMPORTED_MODULE_0__.asyncLoadAllEarlierMessages;
  window.WAPI.areAllMessagesLoaded = _functions__WEBPACK_IMPORTED_MODULE_0__.areAllMessagesLoaded;
  window.WAPI.loadEarlierMessagesTillDate = _functions__WEBPACK_IMPORTED_MODULE_0__.loadEarlierMessagesTillDate;
  window.WAPI.getAllGroupMetadata = _functions__WEBPACK_IMPORTED_MODULE_0__.getAllGroupMetadata;
  window.WAPI.getGroupParticipant = _functions__WEBPACK_IMPORTED_MODULE_0__.getGroupParticipant;
  window.WAPI.getAllMessagesInChat = _functions__WEBPACK_IMPORTED_MODULE_0__.getAllMessagesInChat;
  window.WAPI.loadAndGetAllMessagesInChat = _functions__WEBPACK_IMPORTED_MODULE_0__.loadAndGetAllMessagesInChat;
  window.WAPI.getUnreadMessages = _functions__WEBPACK_IMPORTED_MODULE_0__.getUnreadMessages;
  window.WAPI.getCommonGroups = _functions__WEBPACK_IMPORTED_MODULE_0__.getCommonGroups;
  window.WAPI.getProfilePicFromServer = _functions__WEBPACK_IMPORTED_MODULE_0__.getProfilePicFromServer;
  window.WAPI.downloadFile = _functions__WEBPACK_IMPORTED_MODULE_0__.downloadFile;
  window.WAPI.downloadMedia = _functions__WEBPACK_IMPORTED_MODULE_0__.downloadMedia;
  window.WAPI.getNumberProfile = _functions__WEBPACK_IMPORTED_MODULE_0__.getNumberProfile;
  window.WAPI.getMessageById = _functions__WEBPACK_IMPORTED_MODULE_0__.getMessageById;
  window.WAPI.getNewMessageId = _functions__WEBPACK_IMPORTED_MODULE_0__.getNewMessageId;
  window.WAPI.getFileHash = _helper__WEBPACK_IMPORTED_MODULE_1__.getFileHash;
  window.WAPI.generateMediaKey = _helper__WEBPACK_IMPORTED_MODULE_1__.generateMediaKey;
  window.WAPI.arrayBufferToBase64 = _helper__WEBPACK_IMPORTED_MODULE_1__.arrayBufferToBase64;
  window.WAPI.getListMute = _functions__WEBPACK_IMPORTED_MODULE_0__.getListMute;

  // Device functions
  window.WAPI.getHost = _functions__WEBPACK_IMPORTED_MODULE_0__.getHost;
  window.WAPI.getMe = _functions__WEBPACK_IMPORTED_MODULE_0__.getMe;
  window.WAPI.isConnected = _functions__WEBPACK_IMPORTED_MODULE_0__.isConnected;
  window.WAPI.isLoggedIn = _functions__WEBPACK_IMPORTED_MODULE_0__.isLoggedIn;
  window.WAPI.getBatteryLevel = _functions__WEBPACK_IMPORTED_MODULE_0__.getBatteryLevel;
  window.WAPI.base64ImageToFile = _helper__WEBPACK_IMPORTED_MODULE_1__.base64ToFile;
  window.WAPI.base64ToFile = _helper__WEBPACK_IMPORTED_MODULE_1__.base64ToFile;
  window.WAPI.restartService = _functions__WEBPACK_IMPORTED_MODULE_0__.restartService;
  window.WAPI.killServiceWorker = _functions__WEBPACK_IMPORTED_MODULE_0__.killServiceWorker;
  window.WAPI.sendMute = _functions__WEBPACK_IMPORTED_MODULE_0__.sendMute;

  // Listeners initialization
  window.WAPI._newMessagesQueue = [];
  window.WAPI._newMessagesBuffer =
    sessionStorage.getItem('saved_msgs') != null
      ? JSON.parse(sessionStorage.getItem('saved_msgs'))
      : [];
  window.WAPI._newMessagesDebouncer = null;
  window.WAPI._newMessagesCallbacks = [];

  // Listeners
  window.addEventListener('unload', window.WAPI._unloadInform, false);
  window.addEventListener('beforeunload', window.WAPI._unloadInform, false);
  window.addEventListener('pageunload', window.WAPI._unloadInform, false);
  // On-work below:

  /**
   * New version of @tag message
   */
  window.WAPI.sendMessageMentioned = async function (
    chatId,
    message,
    mentioned
  ) {
    if (!Array.isArray(mentioned)) {
      mentioned = [mentioned];
    }

    const chat = WAPI.getChat(chatId);
    const users = await Store.Contact.serialize().filter((x) =>
      mentioned.includes(x.id.user)
    );

    chat.sendMessage(message, {
      linkPreview: null,
      mentionedJidList: users.map((u) => u.id),
      quotedMsg: null,
      quotedMsgAdminGroupJid: null
    });
  };

  window.WAPI.getProfilePicSmallFromId = async function (id) {
    return await window.Store.ProfilePicThumb.find(id).then(
      async function (d) {
        if (d.img !== undefined) {
          return await window.WAPI.downloadFileWithCredentials(d.img);
        } else {
          return false;
        }
      },
      function (e) {
        return false;
      }
    );
  };

  window.WAPI.getProfilePicFromId = async function (id) {
    return await window.Store.ProfilePicThumb.find(id).then(
      async function (d) {
        if (d.imgFull !== undefined) {
          return await window.WAPI.downloadFileWithCredentials(d.imgFull);
        } else {
          return false;
        }
      },
      function (e) {
        return false;
      }
    );
  };

  window.WAPI.downloadFileWithCredentials = async function (url) {
    if (!axios || !url) return false;
    const ab = (
      await axios.get(url, {
        responseType: 'arraybuffer'
      })
    ).data;
    return btoa(
      new Uint8Array(ab).reduce(
        (data, byte) => data + String.fromCharCode(byte),
        ''
      )
    );
  };

  window.WAPI.getChatIsOnline = async function (chatId) {
    const chat = Store.Chat.get(chatId);
    if (!chat) {
      return false;
    }
    await chat.presence.subscribe();
    return chat.presence.attributes.isOnline;
  };

  window.WAPI.getLastSeen = async function (chatId) {
    const chat = Store.Chat.get(chatId);
    if (!chat) {
      return false;
    }
    await chat.presence.subscribe();
    return chat.presence.chatstate.t || false;
  };

  window.WAPI.getWAVersion = function () {
    return window.Debug.VERSION;
  };

  /**
   * @param id The id of the conversation
   * @param archive boolean true => archive, false => unarchive
   * @return boolean true: worked, false: didnt work (probably already in desired state)
   */
  window.WAPI.archiveChat = async function (id, archive) {
    return await Store.Archive.setArchive(Store.Chat.get(id), archive)
      .then((_) => true)
      .catch((_) => false);
  };

  window.WAPI.takeOver = async function () {
    await window.Store.State.Socket.takeover();
    return true;
  };

  /**
   * Registers a callback to be called when your phone receives a new call request.
   * @param callback - function - Callback function to be called upon a new call. returns a call object.
   * @returns {boolean}
   */
  window.WAPI.onIncomingCall = function (callback) {
    window.WAPI.waitForStore(['Call'], () => {
      window.Store.Call.on('add', callback);
    });
    return true;
  };

  window.WAPI.setMessagesAdminsOnly = async function (chatId, option) {
    await Store.WapQuery.setGroupProperty(chatId, 'announcement', option);
    return true;
  };

  window.WAPI.logout = _functions__WEBPACK_IMPORTED_MODULE_0__.logout;
  window.WAPI.storePromises = {};
  window.WAPI.waitForStore = async function (stores, callback) {
    if (!Array.isArray(stores)) {
      stores = [stores];
    }

    const isUndefined = (p) => typeof window.Store[p] === 'undefined';
    const missing = stores.filter(isUndefined);

    const promises = missing.map((s) => {
      if (!window.WAPI.storePromises[s]) {
        window.WAPI.storePromises[s] = new Promise((resolve) => {
          let time = null;
          const listen = (e) => {
            const name = (e && e.detail) || '';
            if (name === s || !isUndefined(s)) {
              window.removeEventListener('storeLoaded', listen);
              clearInterval(time);
              resolve(true);
            }
          };
          window.addEventListener('storeLoaded', listen);
          time = setInterval(listen, 1000);
        });
      }
      return window.WAPI.storePromises[s];
    });
    const all = Promise.all(promises);

    if (typeof callback === 'function') {
      all.then(callback);
    }

    return await all;
  };

  (0,_listeners__WEBPACK_IMPORTED_MODULE_2__.addOnPoll)();

  (0,_listeners__WEBPACK_IMPORTED_MODULE_2__.addNewMessagesListener)();

  (0,_listeners__WEBPACK_IMPORTED_MODULE_2__.addonUnreadMessage)();
  (0,_listeners__WEBPACK_IMPORTED_MODULE_2__.addonFilePicThumb)();
  (0,_listeners__WEBPACK_IMPORTED_MODULE_2__.addonChatState)();

  (0,_listeners__WEBPACK_IMPORTED_MODULE_2__.addOnStreamChange)();
  (0,_listeners__WEBPACK_IMPORTED_MODULE_2__.addOnStateChange)();
  (0,_listeners__WEBPACK_IMPORTED_MODULE_2__.addOnStream)();

  (0,_listeners__WEBPACK_IMPORTED_MODULE_2__.initNewMessagesListener)();

  (0,_listeners__WEBPACK_IMPORTED_MODULE_2__.addOnNewAcks)();
  (0,_listeners__WEBPACK_IMPORTED_MODULE_2__.addOnAddedToGroup)();
  (0,_listeners__WEBPACK_IMPORTED_MODULE_2__.addOnLiveLocation)();
  (0,_listeners__WEBPACK_IMPORTED_MODULE_2__.addOnParticipantsChange)();
}

})();

/******/ })()
;
//# sourceMappingURL=wapi.js.map