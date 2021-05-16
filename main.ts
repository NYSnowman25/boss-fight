namespace SpriteKind {
    export const MegaCrav = SpriteKind.create()
    export const emptyTruck = SpriteKind.create()
    export const thug = SpriteKind.create()
    export const enemyProjectile = SpriteKind.create()
    export const badThug = SpriteKind.create()
    export const gunThug_1 = SpriteKind.create()
    export const gunThug_2 = SpriteKind.create()
    export const blondeProjectile = SpriteKind.create()
}
namespace StatusBarKind {
    export const thug_1 = StatusBarKind.create()
    export const thug_2 = StatusBarKind.create()
}
sprites.onOverlap(SpriteKind.blondeProjectile, SpriteKind.gunThug_1, function (sprite, otherSprite) {
    thugBar1.value += -34
    sprite.destroy()
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (0 < jump) {
        mySprite.vy += -100
        jump += -11
    }
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        jump = 1
    }
})
sprites.onOverlap(SpriteKind.blondeProjectile, SpriteKind.gunThug_2, function (sprite, otherSprite) {
    thugBar2.value += -34
    sprite.destroy()
})
function spawnThugs1 () {
    score = 1
    info.setScore(10)
    score = 1
    jump = 1
    info.setScore(10)
    score = 1
    jump = 1
    info.setScore(10)
    score = 1
    jump = 1
    info.setScore(10)
    score = 1
    jump = 1
    info.setScore(10)
    score = 1
    jump = 1
    info.setScore(10)
    score = 1
    jump = 1
    info.setScore(10)
    score = 1
    jump = 1
    info.setScore(10)
    score = 1
    jump = 1
    thug11 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 2 2 2 2 . . . . . . . . 
        . . . . 2 d d d 2 . . . . . . . 
        . . . . d d d d 2 . . . . . . . 
        . . . d d f 1 d 2 . . . . . . . 
        . . . . d d d d . . . . . . . . 
        . . . . d d d d . . . . . . . . 
        . . . . . . d . . . . . . . . . 
        . . . f f 5 d 5 f f . . . . . . 
        . . . f f f 5 f f f . . . . . . 
        . . . f f f 5 f f f . . . . . . 
        . . . d f f f f f d . . . . . . 
        . . . . f f f f f . . . . . . . 
        . . . . f f . f f . . . . . . . 
        . . . . f f . f f . . . . . . . 
        . . . . 2 2 . 2 2 . . . . . . . 
        `, SpriteKind.gunThug_1)
    thugBar1 = statusbars.create(20, 4, StatusBarKind.thug_1)
    thugBar1.value = 100
    thugBar1.setColor(5, 2)
    thugBar1.attachToSprite(thug11)
    list.push(thug11)
    thug11.setPosition(288, 217)
    thug21 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 2 2 2 2 . . . . . . . . 
        . . . . 2 d d d 2 . . . . . . . 
        . . . . d d d d 2 . . . . . . . 
        . . . d d f 1 d 2 . . . . . . . 
        . . . . d d d d . . . . . . . . 
        . . . . d d d d . . . . . . . . 
        . . . . . . d . . . . . . . . . 
        . . . f f 5 d 5 f f . . . . . . 
        . . . f f f 5 f f f . . . . . . 
        . . . f f f 5 f f f . . . . . . 
        . . . d f f f f f d . . . . . . 
        . . . . f f f f f . . . . . . . 
        . . . . f f . f f . . . . . . . 
        . . . . f f . f f . . . . . . . 
        . . . . 2 2 . 2 2 . . . . . . . 
        `, SpriteKind.gunThug_2)
    thugBar2 = statusbars.create(20, 4, StatusBarKind.thug_2)
    thugBar2.value = 100
    thugBar2.setColor(5, 2)
    thugBar2.attachToSprite(thug21)
    thug21.setPosition(392, 183)
    list.push(thug21)
    thug31 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 2 2 2 2 . . . . . . . . 
        . . . . 2 d d d 2 . . . . . . . 
        . . . . d d d d 2 . . . . . . . 
        . . . d d f 1 d 2 . . . . . . . 
        . . . . d d d d . . . . . . . . 
        . . . . d d d d . . . . . . . . 
        . . . . . . d . . . . . . . . . 
        . . . f f 5 d 5 f f . . . . . . 
        . . . f f f 5 f f f . . . . . . 
        . . . f f f 5 f f f . . . . . . 
        . . . d f f f f f d . . . . . . 
        . . . . f f f f f . . . . . . . 
        . . . . f f . f f . . . . . . . 
        . . . . f f . f f . . . . . . . 
        . . . . 2 2 . 2 2 . . . . . . . 
        `, SpriteKind.badThug)
    thug31.setPosition(392, 217)
    thug41 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 2 2 2 2 . . . . . . . . 
        . . . . 2 d d d 2 . . . . . . . 
        . . . . d d d d 2 . . . . . . . 
        . . . d d f 1 d 2 . . . . . . . 
        . . . . d d d d . . . . . . . . 
        . . . . d d d d . . . . . . . . 
        . . . . . . d . . . . . . . . . 
        . . . f f 5 d 5 f f . . . . . . 
        . . . f f f 5 f f f . . . . . . 
        . . . f f f 5 f f f . . . . . . 
        . . . d f f f f f d . . . . . . 
        . . . . f f f f f . . . . . . . 
        . . . . f f . f f . . . . . . . 
        . . . . f f . f f . . . . . . . 
        . . . . 2 2 . 2 2 . . . . . . . 
        `, SpriteKind.badThug)
    thug41.setPosition(432, 217)
    thug51 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 2 2 2 2 . . . . . . . . 
        . . . . 2 d d d 2 . . . . . . . 
        . . . . d d d d 2 . . . . . . . 
        . . . d d f 1 d 2 . . . . . . . 
        . . . . d d d d . . . . . . . . 
        . . . . d d d d . . . . . . . . 
        . . . . . . d . . . . . . . . . 
        . . . f f 5 d 5 f f . . . . . . 
        . . . f f f 5 f f f . . . . . . 
        . . . f f f 5 f f f . . . . . . 
        . . . d f f f f f d . . . . . . 
        . . . . f f f f f . . . . . . . 
        . . . . f f . f f . . . . . . . 
        . . . . f f . f f . . . . . . . 
        . . . . 2 2 . 2 2 . . . . . . . 
        `, SpriteKind.badThug)
    thug51.setPosition(480, 217)
    thug61 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 2 2 2 2 . . . . . . . . 
        . . . . 2 d d d 2 . . . . . . . 
        . . . . d d d d 2 . . . . . . . 
        . . . d d f 1 d 2 . . . . . . . 
        . . . . d d d d . . . . . . . . 
        . . . . d d d d . . . . . . . . 
        . . . . . . d . . . . . . . . . 
        . . . f f 5 d 5 f f . . . . . . 
        . . . f f f 5 f f f . . . . . . 
        . . . f f f 5 f f f . . . . . . 
        . . . d f f f f f d . . . . . . 
        . . . . f f f f f . . . . . . . 
        . . . . f f . f f . . . . . . . 
        . . . . f f . f f . . . . . . . 
        . . . . 2 2 . 2 2 . . . . . . . 
        `, SpriteKind.badThug)
    thug61.setPosition(528, 217)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile22`, function (sprite, location) {
    tiles.setTilemap(tilemap`level8`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile24`, function (sprite, location) {
    level2()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (facing == 0) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . 
            . . . 5 5 5 5 . . . . . . 
            . . 5 d d d 5 . . . . . . 
            . . 5 d d d d . . . . . . 
            . . 5 d 1 f d d . . . . . 
            . . . d d d d . . . . . . 
            . . . d d d d . . . . . . 
            . . . . d . . . . 4 4 4 4 
            . 6 6 9 d 9 6 6 6 6 d . . 
            . 6 6 6 9 6 6 . . . 4 . . 
            . 6 6 6 9 6 6 . . . . . . 
            . d 6 6 6 6 6 . . . . . . 
            . . 6 6 6 6 6 . . . . . . 
            . . 6 6 . 6 6 . . . . . . 
            . . 6 6 . 6 6 . . . . . . 
            . . f f . f f . . . . . . 
            `)
        timer.throttle("fire", 500, function () {
            for (let value of bulletList) {
                bullet = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 3 3 . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, mySprite, 30, 0)
                bullet.setKind(SpriteKind.blondeProjectile)
            }
        })
        if (0 < info.score()) {
            timer.throttle("fire", 500, function () {
                for (let value of bulletList) {
                    bullet = sprites.createProjectileFromSprite(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . 3 3 . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, mySprite, 30, 0)
                    bullet.setKind(SpriteKind.blondeProjectile)
                    info.changeScoreBy(-1)
                }
            })
        }
        pause(200)
        if (0 < info.score()) {
            timer.throttle("fire", 500, function () {
                for (let value of bulletList) {
                    bullet = sprites.createProjectileFromSprite(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . 3 3 . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, mySprite, 30, 0)
                    bullet.setKind(SpriteKind.blondeProjectile)
                    info.changeScoreBy(-1)
                }
            })
        }
        pause(200)
        if (0 < info.score()) {
            timer.throttle("fire", 500, function () {
                for (let value of bulletList) {
                    bullet = sprites.createProjectileFromSprite(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . 3 3 . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, mySprite, 30, 0)
                    bullet.setKind(SpriteKind.blondeProjectile)
                    info.changeScoreBy(-1)
                }
            })
        }
        pause(200)
        if (0 < info.score()) {
            timer.throttle("fire", 500, function () {
                for (let value of bulletList) {
                    bullet = sprites.createProjectileFromSprite(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . 3 3 . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, mySprite, 30, 0)
                    bullet.setKind(SpriteKind.blondeProjectile)
                    info.changeScoreBy(-1)
                }
            })
        }
        pause(200)
        if (0 < info.score()) {
            timer.throttle("fire", 500, function () {
                for (let value of bulletList) {
                    bullet = sprites.createProjectileFromSprite(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . 3 3 . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, mySprite, 30, 0)
                    bullet.setKind(SpriteKind.blondeProjectile)
                    info.changeScoreBy(-1)
                }
            })
        }
        pause(200)
        if (0 < info.score()) {
            timer.throttle("fire", 500, function () {
                for (let value of bulletList) {
                    bullet = sprites.createProjectileFromSprite(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . 3 3 . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, mySprite, 30, 0)
                    bullet.setKind(SpriteKind.blondeProjectile)
                    info.changeScoreBy(-1)
                }
            })
        }
        pause(200)
        if (0 < info.score()) {
            timer.throttle("fire", 500, function () {
                for (let value of bulletList) {
                    bullet = sprites.createProjectileFromSprite(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . 3 3 . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, mySprite, 30, 0)
                    bullet.setKind(SpriteKind.blondeProjectile)
                    info.changeScoreBy(-1)
                }
            })
        }
        pause(200)
        if (0 < info.score()) {
            timer.throttle("fire", 500, function () {
                for (let value of bulletList) {
                    bullet = sprites.createProjectileFromSprite(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . 3 3 . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, mySprite, 30, 0)
                    bullet.setKind(SpriteKind.blondeProjectile)
                    info.changeScoreBy(-1)
                }
            })
        }
        pause(200)
        mySprite.setImage(img`
            . . . . . . . . . . . . . 
            . . . . . 5 5 5 5 . . . . 
            . . . . 5 d d d 5 . . . . 
            . . . . 5 d d d d . . . . 
            . . . . 5 d 1 f d d . . . 
            . . . . . d d d d . . . . 
            . . . . . d d d d . . . . 
            . . . . . . d . . . . . . 
            . . . 6 6 9 d 9 6 6 . . . 
            . . . 6 6 6 9 6 6 6 . . . 
            . . . 6 6 6 9 6 6 6 . . . 
            . . . d 6 6 6 6 6 d . . . 
            . . . . 6 6 6 6 6 . . . . 
            . . . . 6 6 . 6 6 . . . . 
            . . . . 6 6 . 6 6 . . . . 
            . . . . f f . f f . . . . 
            `)
    }
    if (facing == 1) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . 
            . . . . . . 5 5 5 5 . . . 
            . . . . . . 5 d d d 5 . . 
            . . . . . . d d d d 5 . . 
            . . . . . d d f 1 d 5 . . 
            . . . . . . d d d d . . . 
            . . . . . . d d d d . . . 
            4 4 4 4 . . . . d . . . . 
            . . d 6 6 6 6 9 d 9 6 6 . 
            . . 4 . . . 6 6 9 6 6 6 . 
            . . . . . . 6 6 9 6 6 6 . 
            . . . . . . 6 6 6 6 6 d . 
            . . . . . . 6 6 6 6 6 . . 
            . . . . . . 6 6 . 6 6 . . 
            . . . . . . 6 6 . 6 6 . . 
            . . . . . . f f . f f . . 
            `)
        timer.throttle("fire", 500, function () {
            for (let value of bulletList) {
                bullet = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 3 3 . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, mySprite, -30, 0)
                bullet.setKind(SpriteKind.blondeProjectile)
            }
        })
        if (0 < info.score()) {
            timer.throttle("fire", 500, function () {
                for (let value of bulletList) {
                    bullet = sprites.createProjectileFromSprite(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . 3 3 . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, mySprite, -30, 0)
                    bullet.setKind(SpriteKind.blondeProjectile)
                    info.changeScoreBy(-1)
                }
            })
        }
        pause(200)
        if (0 < info.score()) {
            timer.throttle("fire", 500, function () {
                for (let value of bulletList) {
                    bullet = sprites.createProjectileFromSprite(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . 3 3 . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, mySprite, -30, 0)
                    bullet.setKind(SpriteKind.blondeProjectile)
                    info.changeScoreBy(-1)
                }
            })
        }
        pause(200)
        if (0 < info.score()) {
            timer.throttle("fire", 500, function () {
                for (let value of bulletList) {
                    bullet = sprites.createProjectileFromSprite(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . 3 3 . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, mySprite, -30, 0)
                    bullet.setKind(SpriteKind.blondeProjectile)
                    info.changeScoreBy(-1)
                }
            })
        }
        pause(200)
        if (0 < info.score()) {
            timer.throttle("fire", 500, function () {
                for (let value of bulletList) {
                    bullet = sprites.createProjectileFromSprite(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . 3 3 . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, mySprite, -30, 0)
                    bullet.setKind(SpriteKind.blondeProjectile)
                    info.changeScoreBy(-1)
                }
            })
        }
        pause(200)
        if (0 < info.score()) {
            timer.throttle("fire", 500, function () {
                for (let value of bulletList) {
                    bullet = sprites.createProjectileFromSprite(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . 3 3 . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, mySprite, -30, 0)
                    bullet.setKind(SpriteKind.blondeProjectile)
                    info.changeScoreBy(-1)
                }
            })
        }
        pause(200)
        if (0 < info.score()) {
            timer.throttle("fire", 500, function () {
                for (let value of bulletList) {
                    bullet = sprites.createProjectileFromSprite(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . 3 3 . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, mySprite, -30, 0)
                    bullet.setKind(SpriteKind.blondeProjectile)
                    info.changeScoreBy(-1)
                }
            })
        }
        pause(200)
        if (0 < info.score()) {
            timer.throttle("fire", 500, function () {
                for (let value of bulletList) {
                    bullet = sprites.createProjectileFromSprite(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . 3 3 . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, mySprite, -30, 0)
                    bullet.setKind(SpriteKind.blondeProjectile)
                    info.changeScoreBy(-1)
                }
            })
        }
        pause(200)
        if (0 < info.score()) {
            timer.throttle("fire", 500, function () {
                for (let value of bulletList) {
                    bullet = sprites.createProjectileFromSprite(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . 3 3 . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, mySprite, -30, 0)
                    bullet.setKind(SpriteKind.blondeProjectile)
                    info.changeScoreBy(-1)
                }
            })
        }
        pause(200)
        mySprite.setImage(img`
            . . . . . . . . . . . . . 
            . . . . 5 5 5 5 . . . . . 
            . . . . 5 d d d 5 . . . . 
            . . . . d d d d 5 . . . . 
            . . . d d f 1 d 5 . . . . 
            . . . . d d d d . . . . . 
            . . . . d d d d . . . . . 
            . . . . . . d . . . . . . 
            . . . 6 6 9 d 9 6 6 . . . 
            . . . 6 6 6 9 6 6 6 . . . 
            . . . 6 6 6 9 6 6 6 . . . 
            . . . d 6 6 6 6 6 d . . . 
            . . . . 6 6 6 6 6 . . . . 
            . . . . 6 6 . 6 6 . . . . 
            . . . . 6 6 . 6 6 . . . . 
            . . . . f f . f f . . . . 
            `)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    getOutOfCar()
})
function level3 () {
    tiles.setTilemap(tilemap`level1`)
    megaCrav = sprites.create(img`
        ................................................
        ................................................
        ................................................
        ......2222............................2222......
        ......2222............................2222......
        ....222222..22....................22..222222....
        ....222222..22....................22..222222....
        ....2222....2222................2222....2222....
        ....2222....2222................2222....2222....
        ..222222....2222................2222....222222..
        ..222222....2222................2222....222222..
        ..222222..222222................222222..222222..
        ..222222..222222................222222..222222..
        ..22222222222222................22222222222222..
        ..22222222222222................22222222222222..
        ..222222222222....................222222222222..
        ..222222222222....................222222222222..
        ....22222222..........2222..........22222222....
        ....22222222......222222222222......22222222....
        ......2222........222222222222........2222......
        ......2222......22ff22222222ff22......2222......
        ........2222....22ff22222222ff22....2222........
        ........22222222222222222222222222222222........
        ............222222222222222222222222............
        ..............22222222222222222222..............
        ..............22222222222222222222..............
        ............ff..2222222222222222..ff............
        ............ff..2222222222222222..ff............
        ..........ff....ff222222222222ff....ff..........
        ..........ff....ff222222222222ff....ff..........
        ..........ff..ff................ff..ff..........
        ..........ff..ff................ff..ff..........
        ..........ff..ff................ff..ff..........
        ..........ff..ff................ff..ff..........
        ................................................
        ................................................
        `, SpriteKind.MegaCrav)
    megaCrav.setPosition(260, 115)
}
function getOutOfCar () {
    exposition()
    escapeTruck.setImage(img`
        ............................fffffffffff...........
        ............................ffffffffffff..........
        ............................fff11111111ff.........
        ............................fff111111111ff........
        ............................fff1111111111ff.......
        ...........................ffff11111111111ff......
        ...........................ffff111111111111ff.....
        ..........................fffff1111111111111ff....
        ..........................fffff11111111111111ff...
        .........................ffffff11111111111111ff...
        .........................ffffff11111111111111ff...
        ........................fffffff111111111111f1ff...
        ........................fffffff111111111111ffff...
        .......................ffffffff111111111111f1ff...
        .......................ffffffff11111111111111ff...
        ......................fffffffff11111111111111ff...
        ...ffffffffffffffffffffffffffffffffffffffffffff...
        ...ffffffffffffffffffffffffffffffffffffffffffff...
        ...ffffffffffffffffffffffffffffffffffffffffffff...
        ...ffffffffffffffffffffffffffffffffffffffffffff...
        ...ffffffffffffffffffffffffffffffffffffffffffff...
        ...ffffffffffffffffffffffffffffffffffffffffffff...
        ...ffffffffffffffffffffffffffffffffffffffffffff...
        ...ffffffffffffffffffffffffffffffffffffffffffff...
        .....cccc.dd.cccc................cccc.dd.cccc.....
        ....cccc.dddd.cccc..............cccc.dddd.cccc....
        ...cccc.ddbbdd.cccc............cccc.ddbbdd.cccc...
        ...ccc.ddbbbbdd.ccc............ccc.ddbbbbdd.ccc...
        ...cc.ddbbffbbdd.cc............cc.ddbbffbbdd.cc...
        ...c.ddbbffffbbdd.c............c.ddbbffffbbdd.c...
        ....ddbbff11ffbbdd..............ddbbff11ffbbdd....
        ...ddbbff1111ffbbdd............ddbbff1111ffbbdd...
        ...ddbbff1111ffbbdd............ddbbff1111ffbbdd...
        ....ddbbff11ffbbdd..............ddbbff11ffbbdd....
        .....ddbbffffbbdd................ddbbffffbbdd.....
        ......ddbbffbbdd..................ddbbffbbdd......
        .......ddbbbbdd....................ddbbbbdd.......
        ........ddbbdd......................ddbbdd........
        .........dddd........................dddd.........
        ..........dd..........................dd..........
        `)
    escapeTruck.setKind(SpriteKind.emptyTruck)
    escapeTruck.vx = 0
    escapeTruck.x = 75
    tiles.setTilemap(tilemap`level6`)
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . 
        . . . . . 5 5 5 5 . . . . 
        . . . . 5 d d d 5 . . . . 
        . . . . 5 d d d d . . . . 
        . . . . 5 d 1 f d d . . . 
        . . . . . d d d d . . . . 
        . . . . . d d d d . . . . 
        . . . . . . d . . . . . . 
        . . . 6 6 9 d 9 6 6 . . . 
        . . . 6 6 6 9 6 6 6 . . . 
        . . . 6 6 6 9 6 6 6 . . . 
        . . . d 6 6 6 6 6 d . . . 
        . . . . 6 6 6 6 6 . . . . 
        . . . . 6 6 . 6 6 . . . . 
        . . . . 6 6 . 6 6 . . . . 
        . . . . f f . f f . . . . 
        `, SpriteKind.Player)
    bulletList.push(mySprite)
    mySprite.setPosition(112, 183)
    mySprite.ay = 200
    controller.moveSprite(mySprite, 100, 0)
    scene.cameraFollowSprite(mySprite)
    spawnThugs1()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile25`, function (sprite, location) {
    level3()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 5 5 5 . . . . . 
        . . . . . . . 5 d d d 5 . . . . 
        . . . . . . . d d d d 5 . . . . 
        . . . . . . d d f 1 d 5 . . . . 
        . . . . . . . d d d d . . . . . 
        . . . . . . . d d d d . . . . . 
        . . . . . . . . . d . . . . . . 
        . . . . . . 6 6 9 d 9 6 6 . . . 
        . . . . . . 6 6 6 9 6 6 6 . . . 
        . . . . . . 6 6 6 9 6 6 6 . . . 
        . . . . . . d 6 6 6 6 6 d . . . 
        . . . . . . . 6 6 6 6 6 . . . . 
        . . . . . . . 6 6 . 6 6 . . . . 
        . . . . . . . 6 6 . 6 6 . . . . 
        . . . . . . . f f . f f . . . . 
        `)
    facing = 1
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . 
        . . . . . 5 5 5 5 . . . . 
        . . . . 5 d d d 5 . . . . 
        . . . . 5 d d d d . . . . 
        . . . . 5 d 1 f d d . . . 
        . . . . . d d d d . . . . 
        . . . . . d d d d . . . . 
        . . . . . . d . . . . . . 
        . . . 6 6 9 d 9 6 6 . . . 
        . . . 6 6 6 9 6 6 6 . . . 
        . . . 6 6 6 9 6 6 6 . . . 
        . . . d 6 6 6 6 6 d . . . 
        . . . . 6 6 6 6 6 . . . . 
        . . . . 6 6 . 6 6 . . . . 
        . . . . 6 6 . 6 6 . . . . 
        . . . . f f . f f . . . . 
        `)
    facing = 0
})
statusbars.onZero(StatusBarKind.thug_1, function (status) {
    thugBar1.spriteAttachedTo().destroy(effects.fire, 500)
    list.shift()
})
info.onLifeZero(function () {
	
})
statusbars.onZero(StatusBarKind.thug_1, function (status) {
    thugBar1.spriteAttachedTo().destroy(effects.fire, 500)
    list.shift()
})
statusbars.onZero(StatusBarKind.thug_1, function (status) {
    thugBar1.spriteAttachedTo().destroy(effects.fire, 500)
    list.shift()
})
statusbars.onZero(StatusBarKind.thug_1, function (status) {
    thugBar1.spriteAttachedTo().destroy(effects.fire, 500)
    list.shift()
})
statusbars.onZero(StatusBarKind.thug_1, function (status) {
    thugBar1.spriteAttachedTo().destroy(effects.fire, 500)
    list.shift()
})
statusbars.onZero(StatusBarKind.thug_1, function (status) {
    thugBar1.spriteAttachedTo().destroy(effects.fire, 500)
    list.shift()
})
statusbars.onZero(StatusBarKind.thug_1, function (status) {
    thugBar1.spriteAttachedTo().destroy(effects.fire, 500)
    list.shift()
})
statusbars.onZero(StatusBarKind.thug_1, function (status) {
    thugBar1.spriteAttachedTo().destroy(effects.fire, 500)
    list.shift()
})
statusbars.onZero(StatusBarKind.thug_1, function (status) {
    thugBar1.spriteAttachedTo().destroy(effects.fire, 500)
    list.shift()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.badThug, function (sprite, otherSprite) {
    game.over(false)
})
statusbars.onZero(StatusBarKind.thug_2, function (status) {
    thugBar2.spriteAttachedTo().destroy(effects.fire, 500)
    list.pop()
})
function level1 () {
    info.setLife(3)
    scene.setBackgroundImage(img`
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111d11111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddd1111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddd1111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddd111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddddd1111111111111111111111111
        111111111dddddddd11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddddddd111111111111111111111111
        11111111dddddddddd1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddddddd11111111111111111111111
        111111dddddddddddddd1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddddddddd11111111111111111111111
        11111ddddddddddddddd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddddddddd11111111111111111111111
        11111ddddddddddddddd1111111111111111111111111111111111111111111111111111111111111111111111111111111111d1111111111111111111111dddddddddddd11111111111111111111111
        1111ddddddddddddddddd111111111111111111111111111111111111111111111111111111111111111111111111111111111d111111111111111111111ddddddddddddd11111111111111111111111
        1111ddddddddddddddddd11111111111111111111111111111111111111111111111111111111111111111111111111111d111d111111111111111111111dddddddddddddd1111111111111111111111
        111dddddddddddddddddd11111111ddd111111111111111111111111111111111111111111111111111dd111111111111ddd1dd111111ddd11111111111dddddddddddddddd111111111111111111111
        111ddddddddddddddddddd111111ddddd11111111111111111111111111111111111111111111111111ddd1111111111dddd1dd11111ddddd1111111111dddddddddddddddd111111111111111111111
        11dddddddddddddddddddd111111ddddd1111111111111111111111111111111111111111111111111dddddd1111111dddddddd11111ddddd111111111dddddddddddddddddd11111111111111111111
        11dddddddddddddddddddd111111ddddd1111111111111111111111111111111111111111111111111dddddd1111111ddddddddd1111ddddd111111111ddddddddddddddddddd1111111111111111111
        11dddddddddddddddddddd111111dddddd111111111111111111111111111111111111111111111111dddddddd1111dddddddddd1111dddddd11111111ddddddddddddddddddd1111111111111111111
        1dddddddddddddddddddddd11111dddddd11111111111111111111111111111111111111111111111ddddddddd1111dddddddddd1111dddddd1111111ddddddddddddddddddddd111111111111111111
        1dddddddddddddddddddddd1111ddddddd111111111111111111ddd11111111111111111111111111dddddddddd111dddddddddd1111dddddd1111111ddddddddddddddddddddd111111111111111111
        1dddddddddddddddddddddd111dddddddd1111111111dddddddddddd1111111111111111111111111ddddddddddd1ddddddddddd111ddddddd1111111ddddddddddddddddddddd111111111111111111
        1dddddddddddddd6ddddddd111dddddddd1111dddddddddddddddddddddd111111111111111111ddddddddddddddddd6dddddddd111ddddddd1111ddddddddddddddddddddddddd11111111111111111
        1ddddddddddddd66ddddddd111dddddddd11dddddddddddddddddddddddd1111111111111111dddddddddddddddddd66dddddddd111ddddddd11ddddddddddddddddddddddddddd11111111111111111
        dddddddddddddd66dddddddd1dddddddddd1dddddddddddddddddddddddddd11111111111111dddddddddddddddddd66dddddddd111dddddddd1ddddddddddddddddddddddddddd11111111111111111
        ddddddddddddd6666dddddddddddddddddddddddddddddddddddddddddddddd1111111111dddddddddddddddddddd6666ddddddd111dddddddddddddddddddddddddddddddddddd11111111111111111
        ddddddddddd66666dddddddddddddddddddddddddddddddddddddddddddddddd11111111ddddddddddddddddddd66666dddddddd11dddddddddddddddddddddddddddddddddddddd1111111111111111
        ddddddddddddd666ddddddddddddddd9999999ddddddddddddddddddddddddddd1111111ddddddddddddddddddddd666ddddddddd1dddddddddddddddddddddddddddddddddddddd1111111111111111
        dddddddddddd66666dddddddddddd99999999999dddddddddddddddddddddddddd11111ddddddddddddddddddddd66666dddddddd1dddddddddddddddddddddddddddddddddddddd1111111111111111
        9ddddddddddd6666666ddddddddd9999999999999dddddddddddddddddddddddddd11ddddddddddddddddddddddd6666666ddddddddddddddddddddddddddddddddddddddddddddd1111111111111111
        999dddddddd666666ddddddddd99999999999999999dddddddddddddddddddddddd1d9999999ddddddddddddddd666666ddddddddddddddddddddddddddddddddddddddddddddddd1111111111111111
        9999ddddd666666666ddddddd9999999999999999999dddddddddddddddddddddddd9999999999ddddddddddd666666666ddddddddddddddddddddddddddddddddddddddddddddddd111111111111111
        99999dddddd66666666ddddd999999999999999999999ddddddddddddddddddddd9999999999999999ddddddddd66666666dddddddddddddddddddddddddddddddddddddddddddddd111111111111111
        999999dd996666666dddddd99999999999999999999999dd99ddddddddddddddd999999999999999999999dddd6666666dddddddddddddddddddddddddddddddddddddddddddddddd111111111111111
        999999999999666666dddd996999999999999999999999999999dddddddddddd699999999999999999999999dddd666666dddddd6dddddddddddddddddddddddddddddddddddddddd111111111111111
        9999999999666666666dd99969999999999999999999999999999969ddddd9996999999999999999999999999d666666666ddddd6dddddddddddddddddddddddddddddddddddddddd11111111111111d
        9999999996666666666699966999999999999999999999999999666999999996699999999999999999999999966666666666ddd66ddddddddddddddddddddddddddddddddddddddddd111111111111dd
        99999996666666666699999966999999999999999999999999666666699999996699999999999999999999966666666666dddddd66ddddddddddddddddddddddddddddddddddddddddd1111111dddddd
        99999999966666666699999669999999999999999999999996666666699999966999999999999999999999999666666666ddddd66dddddddddddddddddddddddddddddddddddddddddddd1111ddddddd
        999999999666666699999966669999999999999999999999966666669999996666999999999999999999999996666666dddddd6666dddddddddddddddddddddddddddddddddddddddddddddddddddddd
        999999996696666666699666666999999999999999999999669666666669966666699999999999999999999966966666666dd666666ddddddddddddddddddddddddddddddddddddddddddddddddddddd
        9999999999666666666699966999999999996999999999999966666666669996699999999999699999999999996666666666ddd66ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        999999996666666666699666666999999999699999999999666666666669966666699999999969999999999966666666666dd666666ddddddddddddddddddddddddddddddddddddddddddddddddddddd
        999699966666666666696666666699999996669999969996666666666669666666669999999666999996999666666666666966666666dddddddddddddddddddddddddddddddddddddddddddddddddddd
        99966999996666666666666666999999999966999996699999666666666666666699999999996699999669999966666666666666666ddddddddddddddddddddddddddddddddddddddddddddddddddddd
        996699996666666666666666666699999996699999669999666666666666666666669999999669999966999966666666666666666666dddddddddddddddddddddddddddddddddddddddddddddddddddd
        9996699666666666666666666666699999666699999669966666666666666666666669999966669999966996666666666666666666666ddddddddddddddddddddddddddddddddddddddddddddddddddd
        99666666666666666666666666699999999666699966666666666666666666666669999999966669996666666666666666666666666ddddddddddddddddddddddddddddddddddddddddddddddddddddd
        9996666666666666666666666666699999666699999666666666666666666666666669999966669999966666666666666666666666666ddddddddddddddddddddddddddddddddddddddddddddddddddd
        99966666666666666666666666666699966666699996666666666666666666666666669996666669999666666666666666666666666666dddddddddddddddddddddddddddddddddddddddddddddddddd
        996666666666666666666666666699999966669999666666666666666666666666669999996666999966666666666666666666666666999ddddddddddddddddddddddddddddddddddddddddddddddddd
        966666666666666666666666666666996666666996666666666666666666666666666699666666699666666666666666666666666666669999dddddddddddddddddddddddddddddddddddddddddddddd
        9966666666666666666666666666666996666666996666666666666666666666666666699666666699666666666666666666666666666669999999dddddddddddddddddddddddddddddddddddddddddd
        996666666666666666666666666666996666666699666666666666666666666666666699666666669966666666666666666666666666669999999999999999dddddddddddddddddddddddddddddddddd
        96666666666666666666666666666669666666666666666666666666666666666666666966666666666666666666666666666666666666699999999999999999999999999999999ddddddddddddddddd
        9666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666699999999999999999999999999999999999999ddddddddd
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666999999999999999999996666666699999999999999dddd
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666999999999999999999966666666666666669999999999
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666699999999666666666666666666666666666699999
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        `)
    tiles.setTilemap(tilemap`level2`)
    escapeTruck = sprites.create(img`
        ............................fffffffffff...........
        ............................ffffffffffff..........
        ............................fff11111111ff.........
        ............................fff111111111ff........
        ............................fff1111111111ff.......
        ...........................ffff11115555111ff......
        ...........................ffff1115ddd51111ff.....
        ..........................fffff1115dddd11111ff....
        ..........................fffff1115d1fdd11111ff...
        .........................ffffff1111dddd111111ff...
        .........................ffffff1111dddd111111ff...
        ........................fffffff11111d111111f1ff...
        ........................fffffff11669d96666dffff...
        .......................ffffffff116669661111f1ff...
        .......................ffffffff11666966111111ff...
        ......................fffffffff11d66666111111ff...
        ...ffffffffffffffffffffffffffffffffffffffffffff...
        ...ffffffffffffffffffffffffffffffffffffffffffff...
        ...ffffffffffffffffffffffffffffffffffffffffffff...
        ...ffffffffffffffffffffffffffffffffffffffffffff...
        ...ffffffffffffffffffffffffffffffffffffffffffff...
        ...ffffffffffffffffffffffffffffffffffffffffffff...
        ...ffffffffffffffffffffffffffffffffffffffffffff...
        ...ffffffffffffffffffffffffffffffffffffffffffff...
        .....cccc.dd.cccc................cccc.dd.cccc.....
        ....cccc.dddd.cccc..............cccc.dddd.cccc....
        ...cccc.ddbbdd.cccc............cccc.ddbbdd.cccc...
        ...ccc.ddbbbbdd.ccc............ccc.ddbbbbdd.ccc...
        ...cc.ddbbffbbdd.cc............cc.ddbbffbbdd.cc...
        ...c.ddbbffffbbdd.c............c.ddbbffffbbdd.c...
        ....ddbbff11ffbbdd..............ddbbff11ffbbdd....
        ...ddbbff1111ffbbdd............ddbbff1111ffbbdd...
        ...ddbbff1111ffbbdd............ddbbff1111ffbbdd...
        ....ddbbff11ffbbdd..............ddbbff11ffbbdd....
        .....ddbbffffbbdd................ddbbffffbbdd.....
        ......ddbbffbbdd..................ddbbffbbdd......
        .......ddbbbbdd....................ddbbbbdd.......
        ........ddbbdd......................ddbbdd........
        .........dddd........................dddd.........
        ..........dd..........................dd..........
        `, SpriteKind.Player)
    escapeTruck.setPosition(23, 204)
    escapeTruck.vx = 400
    scene.cameraFollowSprite(escapeTruck)
}
function level2 () {
    tiles.setTilemap(tilemap`level10`)
    mySprite.setPosition(16, 210)
}
function exposition () {
    game.showLongText("Hello, 008.  Congrats on escaping that prison.", DialogLayout.Top)
    game.showLongText("The data you were able to collect in there was extremely useful for our operations.", DialogLayout.Top)
    game.showLongText("For example, we were able to track down a mob boss near where you are.", DialogLayout.Top)
    game.showLongText("He runs most crime in this part of the country, so taking him out will be quite nice.", DialogLayout.Top)
    game.showLongText("He's holed up in a warehouse-ish building.  You'll know it when you see it.", DialogLayout.Top)
    game.showLongText("Here's a reminder for what to do:", DialogLayout.Bottom)
    game.showLongText("Left/Right buttons to move", DialogLayout.Bottom)
    game.showLongText("Up button to jump", DialogLayout.Bottom)
    game.showLongText("A lets you fire your weapon", DialogLayout.Bottom)
    game.showLongText("B is to heal (1 heart = 1 heal available)", DialogLayout.Bottom)
    game.showLongText("Remember, take out enemies before they take out you.", DialogLayout.Bottom)
    game.showLongText("A healthbar will indicate who's worse for wear.", DialogLayout.Bottom)
    game.showLongText("When your bullet count hits 0, you'll have to reload.", DialogLayout.Bottom)
    game.showLongText("Don't be in the open when your bullets hit zero.", DialogLayout.Bottom)
    game.showLongText("When your bullet count hits 0, you'll reload.", DialogLayout.Bottom)
    game.showLongText("When your bullet count hits 0, you'll reload.", DialogLayout.Bottom)
    game.showLongText("When your bullet count hits 0, you'll reload.", DialogLayout.Bottom)
    game.showLongText("When your bullet count hits 0, you'll reload.", DialogLayout.Bottom)
    game.showLongText("When your bullet count hits 0, you'll reload.", DialogLayout.Bottom)
    game.showLongText("When your bullet count hits 0, you'll reload.", DialogLayout.Bottom)
    game.showLongText("When your bullet count hits 0, you'll reload.", DialogLayout.Bottom)
    game.showLongText("When your bullet count hits 0, you'll reload.", DialogLayout.Bottom)
    game.showLongText("Alright, I think that's all.", DialogLayout.Top)
    game.showLongText("Good luck, 008.", DialogLayout.Top)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile26`, function (sprite, location) {
    mySprite.vy += -400
})
let projectile: Sprite = null
let escapeTruck: Sprite = null
let megaCrav: Sprite = null
let bullet: Sprite = null
let facing = 0
let thug61: Sprite = null
let thug51: Sprite = null
let thug41: Sprite = null
let thug31: Sprite = null
let thug21: Sprite = null
let thug11: Sprite = null
let score = 0
let thugBar2: StatusBarSprite = null
let mySprite: Sprite = null
let jump = 0
let thugBar1: StatusBarSprite = null
let bulletList: Sprite[] = []
let list: Sprite[] = []
level1()
list = []
bulletList = []
game.onUpdateInterval(2000, function () {
    for (let value of list) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 5 5 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, value, -30, 0)
    }
})
forever(function () {
    if (score == 1) {
        if (sight.isInSight(
        thug11,
        mySprite,
        60,
        true
        )) {
            thug11.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . 2 2 2 2 . . . . 
                . . . . . . . . 2 d d d 2 . . . 
                . . . . . . . . d d d d 2 . . . 
                . . . . . . . d d f 1 d 2 . . . 
                . . . . . . . . d d d d . . . . 
                . . . . . . . . d d d d . . . . 
                . a a a a . . . . . d . . . . . 
                . . . a d f f f f 5 d 5 f f . . 
                . . . . . . . . f f 5 f f f . . 
                . . . . . . . . f f 5 f f f . . 
                . . . . . . . . f f f f f d . . 
                . . . . . . . . f f f f f . . . 
                . . . . . . . . f f . f f . . . 
                . . . . . . . . f f . f f . . . 
                . . . . . . . . 2 2 . 2 2 . . . 
                `)
        }
    }
})
forever(function () {
    if (score == 1) {
    	
    }
})
forever(function () {
    if (score == 1) {
    if (score == 1) {
    if (score == 1) {
    if (score == 1) {
    if (score == 1) {
    if (score == 1) {
    if (score == 1) {
    if (score == 1) {
    if (score == 1) {
        if (sight.isInSight(
        thug31,
        mySprite,
        60,
        true
        )) {
            thug31.follow(mySprite)
            thug41.follow(mySprite)
            thug51.follow(mySprite)
            thug61.follow(mySprite)
            thug31.ay = 1000
            thug41.ay = 1000
            thug51.ay = 1000
            thug61.ay = 1000
        }
    }
}
forever(function () {
    if (score == 1) {
        if (info.score() == 0) {
            if (facing == 0) {
                mySprite.setImage(img`
                    . . . . . . . . . . . . . 
                    . . . . . 5 5 5 5 . . . . 
                    . . . . 5 d d d 5 . . . . 
                    . . . . 5 d d d d . . . . 
                    . . . . 5 d 1 f d d 4 . . 
                    . . . . . d d d d . 4 . . 
                    . . . . . d d d d . 4 d 4 
                    . . . . . . d . . . 4 6 . 
                    . . . 6 6 9 d 9 6 6 6 6 . 
                    . . . 6 6 6 9 6 6 . . . . 
                    . . . 6 6 6 9 6 6 . . . . 
                    . . . d 6 6 6 6 6 . . . . 
                    . . . . 6 6 6 6 6 . . . . 
                    . . . . 6 6 . 6 6 . . . . 
                    . . . . 6 6 . 6 6 . . . . 
                    . . . . f f . f f . . . . 
                    `)
                info.setScore(10)
                pause(5000)
                mySprite.setImage(img`
                    . . . . . . . . . . . . . 
                    . . . . . 5 5 5 5 . . . . 
                    . . . . 5 d d d 5 . . . . 
                    . . . . 5 d d d d . . . . 
                    . . . . 5 d 1 f d d . . . 
                    . . . . . d d d d . . . . 
                    . . . . . d d d d . . . . 
                    . . . . . . d . . . . . . 
                    . . . 6 6 9 d 9 6 6 . . . 
                    . . . 6 6 6 9 6 6 6 . . . 
                    . . . 6 6 6 9 6 6 6 . . . 
                    . . . d 6 6 6 6 6 d . . . 
                    . . . . 6 6 6 6 6 . . . . 
                    . . . . 6 6 . 6 6 . . . . 
                    . . . . 6 6 . 6 6 . . . . 
                    . . . . f f . f f . . . . 
                    `)
            }
            if (facing == 1) {
                mySprite.setImage(img`
                    . . . . . . . . . . . . . 
                    . . . . 5 5 5 5 . . . . . 
                    . . . . 5 d d d 5 . . . . 
                    . . . . d d d d 5 . . . . 
                    . . 4 d d f 1 d 5 . . . . 
                    . . 4 . d d d d . . . . . 
                    4 d 4 . d d d d . . . . . 
                    . 6 4 . . . d . . . . . . 
                    . 6 6 6 6 9 d 9 6 6 . . . 
                    . . . . 6 6 9 6 6 6 . . . 
                    . . . . 6 6 9 6 6 6 . . . 
                    . . . . 6 6 6 6 6 d . . . 
                    . . . . 6 6 6 6 6 . . . . 
                    . . . . 6 6 . 6 6 . . . . 
                    . . . . 6 6 . 6 6 . . . . 
                    . . . . f f . f f . . . . 
                    `)
                info.setScore(10)
                pause(5000)
                mySprite.setImage(img`
                    . . . . . . . . . . . . . 
                    . . . . 5 5 5 5 . . . . . 
                    . . . . 5 d d d 5 . . . . 
                    . . . . d d d d 5 . . . . 
                    . . . d d f 1 d 5 . . . . 
                    . . . . d d d d . . . . . 
                    . . . . d d d d . . . . . 
                    . . . . . . d . . . . . . 
                    . . . 6 6 9 d 9 6 6 . . . 
                    . . . 6 6 6 9 6 6 6 . . . 
                    . . . 6 6 6 9 6 6 6 . . . 
                    . . . d 6 6 6 6 6 d . . . 
                    . . . . 6 6 6 6 6 . . . . 
                    . . . . 6 6 . 6 6 . . . . 
                    . . . . 6 6 . 6 6 . . . . 
                    . . . . f f . f f . . . . 
                    `)
            }
        }
    }
})
forever(function () {
    if (score == 1) {
    if (score == 1) {
        if (info.score() == 0) {
            if (facing == 0) {
                mySprite.setImage(img`
                    . . . . . . . . . . . . . 
                    . . . . . 5 5 5 5 . . . . 
                    . . . . 5 d d d 5 . . . . 
                    . . . . 5 d d d d . . . . 
                    . . . . 5 d 1 f d d 4 . . 
                    . . . . . d d d d . 4 . . 
                    . . . . . d d d d . 4 d 4 
                    . . . . . . d . . . 4 6 . 
                    . . . 6 6 9 d 9 6 6 6 6 . 
                    . . . 6 6 6 9 6 6 . . . . 
                    . . . 6 6 6 9 6 6 . . . . 
                    . . . d 6 6 6 6 6 . . . . 
                    . . . . 6 6 6 6 6 . . . . 
                    . . . . 6 6 . 6 6 . . . . 
                    . . . . 6 6 . 6 6 . . . . 
                    . . . . f f . f f . . . . 
                    `)
                info.setScore(10)
                pause(5000)
                mySprite.setImage(img`
                    . . . . . . . . . . . . . 
                    . . . . . 5 5 5 5 . . . . 
                    . . . . 5 d d d 5 . . . . 
                    . . . . 5 d d d d . . . . 
                    . . . . 5 d 1 f d d . . . 
                    . . . . . d d d d . . . . 
                    . . . . . d d d d . . . . 
                    . . . . . . d . . . . . . 
                    . . . 6 6 9 d 9 6 6 . . . 
                    . . . 6 6 6 9 6 6 6 . . . 
                    . . . 6 6 6 9 6 6 6 . . . 
                    . . . d 6 6 6 6 6 d . . . 
                    . . . . 6 6 6 6 6 . . . . 
                    . . . . 6 6 . 6 6 . . . . 
                    . . . . 6 6 . 6 6 . . . . 
                    . . . . f f . f f . . . . 
                    `)
            }
            if (facing == 1) {
                mySprite.setImage(img`
                    . . . . . . . . . . . . . 
                    . . . . 5 5 5 5 . . . . . 
                    . . . . 5 d d d 5 . . . . 
                    . . . . d d d d 5 . . . . 
                    . . 4 d d f 1 d 5 . . . . 
                    . . 4 . d d d d . . . . . 
                    4 d 4 . d d d d . . . . . 
                    . 6 4 . . . d . . . . . . 
                    . 6 6 6 6 9 d 9 6 6 . . . 
                    . . . . 6 6 9 6 6 6 . . . 
                    . . . . 6 6 9 6 6 6 . . . 
                    . . . . 6 6 6 6 6 d . . . 
                    . . . . 6 6 6 6 6 . . . . 
                    . . . . 6 6 . 6 6 . . . . 
                    . . . . 6 6 . 6 6 . . . . 
                    . . . . f f . f f . . . . 
                    `)
                info.setScore(10)
                pause(5000)
                mySprite.setImage(img`
                    . . . . . . . . . . . . . 
                    . . . . 5 5 5 5 . . . . . 
                    . . . . 5 d d d 5 . . . . 
                    . . . . d d d d 5 . . . . 
                    . . . d d f 1 d 5 . . . . 
                    . . . . d d d d . . . . . 
                    . . . . d d d d . . . . . 
                    . . . . . . d . . . . . . 
                    . . . 6 6 9 d 9 6 6 . . . 
                    . . . 6 6 6 9 6 6 6 . . . 
                    . . . 6 6 6 9 6 6 6 . . . 
                    . . . d 6 6 6 6 6 d . . . 
                    . . . . 6 6 6 6 6 . . . . 
                    . . . . 6 6 . 6 6 . . . . 
                    . . . . 6 6 . 6 6 . . . . 
                    . . . . f f . f f . . . . 
                    `)
            }
        }
    }
}
forever(function () {
    if (score == 1) {
    if (score == 1) {
        if (info.score() == 0) {
            if (facing == 0) {
                mySprite.setImage(img`
                    . . . . . . . . . . . . . 
                    . . . . . 5 5 5 5 . . . . 
                    . . . . 5 d d d 5 . . . . 
                    . . . . 5 d d d d . . . . 
                    . . . . 5 d 1 f d d 4 . . 
                    . . . . . d d d d . 4 . . 
                    . . . . . d d d d . 4 d 4 
                    . . . . . . d . . . 4 6 . 
                    . . . 6 6 9 d 9 6 6 6 6 . 
                    . . . 6 6 6 9 6 6 . . . . 
                    . . . 6 6 6 9 6 6 . . . . 
                    . . . d 6 6 6 6 6 . . . . 
                    . . . . 6 6 6 6 6 . . . . 
                    . . . . 6 6 . 6 6 . . . . 
                    . . . . 6 6 . 6 6 . . . . 
                    . . . . f f . f f . . . . 
                    `)
                info.setScore(10)
                pause(5000)
                mySprite.setImage(img`
                    . . . . . . . . . . . . . 
                    . . . . . 5 5 5 5 . . . . 
                    . . . . 5 d d d 5 . . . . 
                    . . . . 5 d d d d . . . . 
                    . . . . 5 d 1 f d d . . . 
                    . . . . . d d d d . . . . 
                    . . . . . d d d d . . . . 
                    . . . . . . d . . . . . . 
                    . . . 6 6 9 d 9 6 6 . . . 
                    . . . 6 6 6 9 6 6 6 . . . 
                    . . . 6 6 6 9 6 6 6 . . . 
                    . . . d 6 6 6 6 6 d . . . 
                    . . . . 6 6 6 6 6 . . . . 
                    . . . . 6 6 . 6 6 . . . . 
                    . . . . 6 6 . 6 6 . . . . 
                    . . . . f f . f f . . . . 
                    `)
            }
            if (facing == 1) {
                mySprite.setImage(img`
                    . . . . . . . . . . . . . 
                    . . . . 5 5 5 5 . . . . . 
                    . . . . 5 d d d 5 . . . . 
                    . . . . d d d d 5 . . . . 
                    . . 4 d d f 1 d 5 . . . . 
                    . . 4 . d d d d . . . . . 
                    4 d 4 . d d d d . . . . . 
                    . 6 4 . . . d . . . . . . 
                    . 6 6 6 6 9 d 9 6 6 . . . 
                    . . . . 6 6 9 6 6 6 . . . 
                    . . . . 6 6 9 6 6 6 . . . 
                    . . . . 6 6 6 6 6 d . . . 
                    . . . . 6 6 6 6 6 . . . . 
                    . . . . 6 6 . 6 6 . . . . 
                    . . . . 6 6 . 6 6 . . . . 
                    . . . . f f . f f . . . . 
                    `)
                info.setScore(10)
                pause(5000)
                mySprite.setImage(img`
                    . . . . . . . . . . . . . 
                    . . . . 5 5 5 5 . . . . . 
                    . . . . 5 d d d 5 . . . . 
                    . . . . d d d d 5 . . . . 
                    . . . d d f 1 d 5 . . . . 
                    . . . . d d d d . . . . . 
                    . . . . d d d d . . . . . 
                    . . . . . . d . . . . . . 
                    . . . 6 6 9 d 9 6 6 . . . 
                    . . . 6 6 6 9 6 6 6 . . . 
                    . . . 6 6 6 9 6 6 6 . . . 
                    . . . d 6 6 6 6 6 d . . . 
                    . . . . 6 6 6 6 6 . . . . 
                    . . . . 6 6 . 6 6 . . . . 
                    . . . . 6 6 . 6 6 . . . . 
                    . . . . f f . f f . . . . 
                    `)
            }
        }
    }
}

forever(function () {
    if (score == 1) {
    if (score == 1) {
        if (info.score() == 0) {
            if (facing == 0) {
                mySprite.setImage(img`
                    . . . . . . . . . . . . . 
                    . . . . . 5 5 5 5 . . . . 
                    . . . . 5 d d d 5 . . . . 
                    . . . . 5 d d d d . . . . 
                    . . . . 5 d 1 f d d 4 . . 
                    . . . . . d d d d . 4 . . 
                    . . . . . d d d d . 4 d 4 
                    . . . . . . d . . . 4 6 . 
                    . . . 6 6 9 d 9 6 6 6 6 . 
                    . . . 6 6 6 9 6 6 . . . . 
                    . . . 6 6 6 9 6 6 . . . . 
                    . . . d 6 6 6 6 6 . . . . 
                    . . . . 6 6 6 6 6 . . . . 
                    . . . . 6 6 . 6 6 . . . . 
                    . . . . 6 6 . 6 6 . . . . 
                    . . . . f f . f f . . . . 
                    `)
                info.setScore(10)
                pause(5000)
                mySprite.setImage(img`
                    . . . . . . . . . . . . . 
                    . . . . . 5 5 5 5 . . . . 
                    . . . . 5 d d d 5 . . . . 
                    . . . . 5 d d d d . . . . 
                    . . . . 5 d 1 f d d . . . 
                    . . . . . d d d d . . . . 
                    . . . . . d d d d . . . . 
                    . . . . . . d . . . . . . 
                    . . . 6 6 9 d 9 6 6 . . . 
                    . . . 6 6 6 9 6 6 6 . . . 
                    . . . 6 6 6 9 6 6 6 . . . 
                    . . . d 6 6 6 6 6 d . . . 
                    . . . . 6 6 6 6 6 . . . . 
                    . . . . 6 6 . 6 6 . . . . 
                    . . . . 6 6 . 6 6 . . . . 
                    . . . . f f . f f . . . . 
                    `)
            }
            if (facing == 1) {
                mySprite.setImage(img`
                    . . . . . . . . . . . . . 
                    . . . . 5 5 5 5 . . . . . 
                    . . . . 5 d d d 5 . . . . 
                    . . . . d d d d 5 . . . . 
                    . . 4 d d f 1 d 5 . . . . 
                    . . 4 . d d d d . . . . . 
                    4 d 4 . d d d d . . . . . 
                    . 6 4 . . . d . . . . . . 
                    . 6 6 6 6 9 d 9 6 6 . . . 
                    . . . . 6 6 9 6 6 6 . . . 
                    . . . . 6 6 9 6 6 6 . . . 
                    . . . . 6 6 6 6 6 d . . . 
                    . . . . 6 6 6 6 6 . . . . 
                    . . . . 6 6 . 6 6 . . . . 
                    . . . . 6 6 . 6 6 . . . . 
                    . . . . f f . f f . . . . 
                    `)
                info.setScore(10)
                pause(5000)
                mySprite.setImage(img`
                    . . . . . . . . . . . . . 
                    . . . . 5 5 5 5 . . . . . 
                    . . . . 5 d d d 5 . . . . 
                    . . . . d d d d 5 . . . . 
                    . . . d d f 1 d 5 . . . . 
                    . . . . d d d d . . . . . 
                    . . . . d d d d . . . . . 
                    . . . . . . d . . . . . . 
                    . . . 6 6 9 d 9 6 6 . . . 
                    . . . 6 6 6 9 6 6 6 . . . 
                    . . . 6 6 6 9 6 6 6 . . . 
                    . . . d 6 6 6 6 6 d . . . 
                    . . . . 6 6 6 6 6 . . . . 
                    . . . . 6 6 . 6 6 . . . . 
                    . . . . 6 6 . 6 6 . . . . 
                    . . . . f f . f f . . . . 
                    `)
            }
        }
    }
}
forever(function () {
    if (score == 1) {
    if (score == 1) {
        if (info.score() == 0) {
            if (facing == 0) {
                mySprite.setImage(img`
                    . . . . . . . . . . . . . 
                    . . . . . 5 5 5 5 . . . . 
                    . . . . 5 d d d 5 . . . . 
                    . . . . 5 d d d d . . . . 
                    . . . . 5 d 1 f d d 4 . . 
                    . . . . . d d d d . 4 . . 
                    . . . . . d d d d . 4 d 4 
                    . . . . . . d . . . 4 6 . 
                    . . . 6 6 9 d 9 6 6 6 6 . 
                    . . . 6 6 6 9 6 6 . . . . 
                    . . . 6 6 6 9 6 6 . . . . 
                    . . . d 6 6 6 6 6 . . . . 
                    . . . . 6 6 6 6 6 . . . . 
                    . . . . 6 6 . 6 6 . . . . 
                    . . . . 6 6 . 6 6 . . . . 
                    . . . . f f . f f . . . . 
                    `)
                info.setScore(10)
                pause(5000)
                mySprite.setImage(img`
                    . . . . . . . . . . . . . 
                    . . . . . 5 5 5 5 . . . . 
                    . . . . 5 d d d 5 . . . . 
                    . . . . 5 d d d d . . . . 
                    . . . . 5 d 1 f d d . . . 
                    . . . . . d d d d . . . . 
                    . . . . . d d d d . . . . 
                    . . . . . . d . . . . . . 
                    . . . 6 6 9 d 9 6 6 . . . 
                    . . . 6 6 6 9 6 6 6 . . . 
                    . . . 6 6 6 9 6 6 6 . . . 
                    . . . d 6 6 6 6 6 d . . . 
                    . . . . 6 6 6 6 6 . . . . 
                    . . . . 6 6 . 6 6 . . . . 
                    . . . . 6 6 . 6 6 . . . . 
                    . . . . f f . f f . . . . 
                    `)
            }
            if (facing == 1) {
                mySprite.setImage(img`
                    . . . . . . . . . . . . . 
                    . . . . 5 5 5 5 . . . . . 
                    . . . . 5 d d d 5 . . . . 
                    . . . . d d d d 5 . . . . 
                    . . 4 d d f 1 d 5 . . . . 
                    . . 4 . d d d d . . . . . 
                    4 d 4 . d d d d . . . . . 
                    . 6 4 . . . d . . . . . . 
                    . 6 6 6 6 9 d 9 6 6 . . . 
                    . . . . 6 6 9 6 6 6 . . . 
                    . . . . 6 6 9 6 6 6 . . . 
                    . . . . 6 6 6 6 6 d . . . 
                    . . . . 6 6 6 6 6 . . . . 
                    . . . . 6 6 . 6 6 . . . . 
                    . . . . 6 6 . 6 6 . . . . 
                    . . . . f f . f f . . . . 
                    `)
                info.setScore(10)
                pause(5000)
                mySprite.setImage(img`
                    . . . . . . . . . . . . . 
                    . . . . 5 5 5 5 . . . . . 
                    . . . . 5 d d d 5 . . . . 
                    . . . . d d d d 5 . . . . 
                    . . . d d f 1 d 5 . . . . 
                    . . . . d d d d . . . . . 
                    . . . . d d d d . . . . . 
                    . . . . . . d . . . . . . 
                    . . . 6 6 9 d 9 6 6 . . . 
                    . . . 6 6 6 9 6 6 6 . . . 
                    . . . 6 6 6 9 6 6 6 . . . 
                    . . . d 6 6 6 6 6 d . . . 
                    . . . . 6 6 6 6 6 . . . . 
                    . . . . 6 6 . 6 6 . . . . 
                    . . . . 6 6 . 6 6 . . . . 
                    . . . . f f . f f . . . . 
                    `)
            }
        }
    }
}
forever(function () {
    if (score == 1) {
        if (sight.isInSight(
        thug21,
        mySprite,
        60,
        true
        )) {
            thug21.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . 2 2 2 2 . . . . 
                . . . . . . . . 2 d d d 2 . . . 
                . . . . . . . . d d d d 2 . . . 
                . . . . . . . d d f 1 d 2 . . . 
                . . . . . . . . d d d d . . . . 
                . . . . . . . . d d d d . . . . 
                . a a a a . . . . . d . . . . . 
                . . . a d f f f f 5 d 5 f f . . 
                . . . . . . . . f f 5 f f f . . 
                . . . . . . . . f f 5 f f f . . 
                . . . . . . . . f f f f f d . . 
                . . . . . . . . f f f f f . . . 
                . . . . . . . . f f . f f . . . 
                . . . . . . . . f f . f f . . . 
                . . . . . . . . 2 2 . 2 2 . . . 
                `)
        }
    }
})
