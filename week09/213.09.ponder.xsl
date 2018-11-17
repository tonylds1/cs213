<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0"
            xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
            xmlns="http://www.w3.org/1999/xhtml">
   <xsl:output method="html" omit-xml-declaration="yes" indent="yes"/>
   <xsl:template match="/">
        <html>
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Tony Moraes' Assingments</title>
                <link rel="stylesheet" href="../css/cs213-w09.css" /> 
            </head>
            <body>
                <h1>CS 213 assingment - Week 09</h1>
                <div>
                    <a href="../index.html">Home</a>
                </div>
                <ul>
                    <li>
                        <a href="../week08/index.html">Previus</a>
                    </li>
                    <li>
                        <a href="../week10/index.html">Next</a>
                    </li>
                </ul>
                <div class="container">
                    <xsl:for-each select="bsa/council">
                        <xsl:call-template name="council-container">
                            <xsl:with-param name="council" select = "." />
                        </xsl:call-template>
                    </xsl:for-each> <!-- concil -->
                </div> <!-- content -->
            </body>
        </html>
    </xsl:template>

    <xsl:template name="council-container">
        <xsl:param name="council"/>
        <div class='council-troop'>
            <xsl:for-each select="$council/troop">
                <h1>
                    <strong>Council:</strong> <xsl:value-of select="$council/@name" /> - 
                    <strong>Troop: </strong> <xsl:value-of select="@number" /> - <xsl:value-of select="@unit" />
                </h1>
                <xsl:call-template name="troop-container">
                    <xsl:with-param name="troop" select = "." />
                </xsl:call-template>
            </xsl:for-each>
        </div>
    </xsl:template>

    <xsl:template name="troop-container">
        <xsl:param name="troop"/>
        <xsl:for-each select="$troop/scout">
            <xsl:call-template name="scout-container">
                <xsl:with-param name="scout" select = "." />
            </xsl:call-template>
        </xsl:for-each>
    </xsl:template>

    <xsl:template name="scout-container">
        <xsl:param name="scout"/>
        <div class='scout'>
            <h2><span class="surname"><xsl:value-of select="$scout/last-name" /></span>, <xsl:value-of select="$scout/first-name" /></h2>
            <div class="info"><strong>Address:</strong> <xsl:value-of select="$scout/address" /> <br/>
            <strong>Phone:</strong> <xsl:value-of select="$scout/phone" /></div>
            <div class="inner-boxes rank">
                <h3>Rank</h3>
                <ul>
                    <xsl:for-each select="$scout/rank">
                        <xsl:call-template name="rank-container">
                            <xsl:with-param name="rank" select = "." />
                        </xsl:call-template>
                    </xsl:for-each>
                </ul>
            </div>
            <div class="meritbadges inner-boxes">
                <h3>Meritbadges</h3>
                <ul>
                    <xsl:for-each select="$scout/meritbadge">
                        <xsl:call-template name="meritbadge-container">
                            <xsl:with-param name="meritbadge" select = "." />
                        </xsl:call-template>
                    </xsl:for-each>
                </ul>
            </div>
        </div>        
    </xsl:template>

    <xsl:template name="rank-container">
        <xsl:param name="rank"/>
        <li><strong><xsl:value-of select="$rank" /> </strong> since <xsl:value-of select="$rank/@date-earned" /></li>
    </xsl:template>

    <xsl:template name="meritbadge-container">
        <xsl:param name="meritbadge"/>
        <li><strong><xsl:value-of select="$meritbadge" /> </strong> since <xsl:value-of select="$meritbadge/@date-earned" /></li>
    </xsl:template>
</xsl:stylesheet> 
