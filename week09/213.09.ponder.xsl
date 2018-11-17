<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0"
            xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
   <xsl:output method="xhtml" omit-xml-declaration="yes" indent="yes"/>
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
                    <div class='council-troop'>
                    <xsl:for-each select="council/troop">
                        <h1><strong>Council:</strong> <xsl:value-of select="@name"/> - <strong>Troop: </strong> <xsl:value-of select="@number"/> - <xsl:value-of select="@unit"/></h1>
                        <xsl:for-each select="tropp/scout">
                        <div class='scout'>
                            <h2><span class="surname">Wegener</span>, Shella</h2>
                            <div class="info"><strong>Address:</strong> Maple Ave., Garner - NY <br/>
                            <strong>Phone:</strong> 232332223</div>
                            <div class="inner-boxes rank">
                                <h3>Rank</h3>
                                <ul>
                                    <li><strong>first </strong>since 26-08-1982</li>
                                    <li><strong>second </strong> since 26-08-1982</li>
                                </ul>
                            </div>
                            <div class="meritbadges inner-boxes">
                                <h3>Meritbadges</h3>
                                <ul>
                                    <li><strong>first </strong> since 26-08-1982</li>
                                    <li><strong>second </strong> since 26-08-1982</li>
                                </ul>
                            </div>
                        </div>
                        </xsl:for-each> <!-- scout -->
                        <div class="troop-footer">There is 3 scouts in this troop.</div>
                    </xsl:for-each> <!-- troop -->
                    </div> <!-- concil/troop -->
                </xsl:for-each> <!-- concil -->
                </div> <!-- content -->
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet> 